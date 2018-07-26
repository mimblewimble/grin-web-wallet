import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {Output, OutputsResponse} from '../model/output';
import {TxLogEntry} from '../model/tx-log-entry';
import {WalletInfo} from '../model/walletinfo';
import {Error} from '../model/error';
import {SendTXArgs} from '../model/sender';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class WalletService {

  private output_url = 'http://localhost:13420/v1/wallet/owner/retrieve_outputs';
  private txs_url = 'http://localhost:13420/v1/wallet/owner/retrieve_txs';
  private wallet_info_url = 'http://localhost:13420/v1/wallet/owner/retrieve_summary_info';
  private node_height_url = 'http://localhost:13420/v1/wallet/owner/node_height';
  private send_url = 'http://localhost:13420/v1/wallet/owner/issue_send_tx';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  isUpdatingEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  totalFailureEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  showSenderEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  walletErrorEmitter: EventEmitter<Error> = new EventEmitter<Error>();


  outputs: Output[];
  txs: TxLogEntry[];
  cur_tx: TxLogEntry;
  walletInfo: WalletInfo;
  currentNodeHeight: number;

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) {
    this.currentNodeHeight = 0;
  }

  showSender(): void {
    this.showSenderEmitter.emit(true);
  }

  /** GET outputs from the server */
  refreshOutputs(refresh_from_node: boolean): void {
    if (refresh_from_node) {
      this.isUpdatingEmitter.emit(true);
    }
    let output_url = this.output_url;
    if (refresh_from_node) {
      output_url += '?refresh';
    }
    this.http.get<OutputsResponse>(output_url)
      .subscribe(outputs_response => {
        console.dir('was refreshed: ' + outputs_response[0]);
        this.outputs = outputs_response[1];
        this.isUpdatingEmitter.emit(false);
      });
  }

  getOutputs(): Observable<Output[]> {
    return this.http.get<Output>(this.output_url)
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

  /** GET wallet summary from the server */
  refreshWalletInfo(refresh_from_node: boolean): void {
    if (refresh_from_node) {
      this.isUpdatingEmitter.emit(true);
    }
    let wallet_info_url = this.wallet_info_url;
    if (refresh_from_node) {
      wallet_info_url += '?refresh';
    }
    this.http.get<WalletInfo>(wallet_info_url)
      .subscribe(walletInfo => {
        this.walletInfo = walletInfo[1];
        if (this.walletInfo.last_confirmed_height > this.currentNodeHeight) {
          this.currentNodeHeight = this.walletInfo.last_confirmed_height;
        }
        this.isUpdatingEmitter.emit(false);
      });
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

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('WalletService: ' + message);
  }
}


