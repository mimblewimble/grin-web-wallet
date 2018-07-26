import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {Output, OutputsResponse} from '../model/output';
import {TxLogEntry} from '../model/tx-log-entry';
import {WalletInfo} from '../model/walletinfo';
import {Error} from '../model/error';
import {SendTXArgs} from '../model/sender';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Resolve, Router} from '@angular/router';

@Injectable()
export class WalletService {

  private output_url = 'http://localhost:13420/v1/wallet/owner/retrieve_outputs';
  private txs_url = 'http://localhost:13420/v1/wallet/owner/retrieve_txs';
  private wallet_info_url = 'http://localhost:13420/v1/wallet/owner/retrieve_summary_info';
  private node_height_url = 'http://localhost:13420/v1/wallet/owner/node_height';
  private send_url = 'http://localhost:13420/v1/wallet/owner/issue_send_tx';

  isUpdatingEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  totalFailureEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  showSenderEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  walletErrorEmitter: EventEmitter<Error> = new EventEmitter<Error>();

  currentNodeHeight: number;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.currentNodeHeight = 0;
  }

  showSender(): void {
    this.showSenderEmitter.emit(true);
  }

  /**
   * Refresh the height from the wallet's preferred node
   * Should be run fairly frequently to let user know when
   * to update
   */

  refreshHeight(): void {
    this.http.get(this.node_height_url)
      .subscribe(heightInfo => {
          this.totalFailureEmitter.emit(false);
          if (heightInfo[1]) {
            this.currentNodeHeight = heightInfo[0];
          }
        },
        error => {
          this.totalFailureEmitter.emit(true);
        });
  }

  /**
   * Refresh all wallet info against the preferred node
   * Can potentially take a while, so user should be blocked
   * while this is happening
   */

  refreshWalletFromNode(): void {
    this.isUpdatingEmitter.emit(true);
    // just do a wallet info with with a refresh, ignore the result
    const wallet_info_url = this.wallet_info_url + '?refresh';
    this.http.get<WalletInfo>(wallet_info_url)
      .subscribe(walletInfo => {
        const info = walletInfo[1];
        if (info.last_confirmed_height > this.currentNodeHeight) {
          this.currentNodeHeight = info.last_confirmed_height;
        }
        this.router.navigate(this.route.snapshot.url);
        this.isUpdatingEmitter.emit(false);
      });
  }

  /**
   * Rest-y type functions
   */

  getOutputs(tx_id: number, show_spent: boolean): Observable<Output[]> {
    let url = this.output_url;
    if (tx_id != null) {
     url += '?tx_id=' + tx_id;
    }
    if (show_spent === true) {
      if (tx_id != null) {
        url += '&show_spent=true';
      } else {
        url += '?show_spent=true';
      }
    }
    console.log('Calling URL ' + url);
    return this.http.get<Output>(url)
      .pipe(map(outputs_response => {
        return outputs_response[1];
      }));
  }

  getTxLog(id: number): Observable<TxLogEntry> {
    return this.http.get<TxLogEntry>(this.txs_url + '?id=' + id)
      .pipe(map(tx_response => {
        return tx_response[1][0];
      }));
  }

  getTxLogs(): Observable<TxLogEntry[]> {
    return this.http.get<TxLogEntry>(this.txs_url)
      .pipe(map(tx_response => {
        return tx_response[1];
      }));
  }

  getWalletInfo(): Observable<WalletInfo> {
    return this.http.get<WalletInfo>(this.wallet_info_url)
      .pipe(map(wallet_response => {
        return wallet_response[1];
      }));
  }



  postSend(args: SendTXArgs): void {
    console.log('Posting - ' + this.send_url);
    console.dir(args);
    this.http.post(this.send_url, args)
      .subscribe((res) => {
        this.walletErrorEmitter.emit({
          type: 'success',
          message: 'Ok'
        });
      }, error => {
        this.walletErrorEmitter.emit({
          type: 'sender',
          message: error.error,
        });
      });
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a message with the MessageService */
  private log(message: string) {
    console.log('WalletService: ' + message);
  }
}

