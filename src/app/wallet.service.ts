import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {Output, OutputsResponse} from './outputs/output';
import {WalletInfo} from './wallet-info/walletinfo';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private output_url = 'http://localhost:13420/v1/wallet/owner/retrieve_outputs';
  private wallet_info_url = 'http://localhost:13420/v1/wallet/owner/retrieve_summary_info';
  private node_height_url = 'http://localhost:13420/v1/wallet/owner/node_height';

  isUpdatingEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  totalFailureEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  outputs: Output[];
  walletInfo: WalletInfo;
  mostRecentValidatedHeight: number;
  currentNodeHeight: number;
  nodeHeightValidated: boolean;

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) {
    this.mostRecentValidatedHeight = 0;
    this.currentNodeHeight = 0;
  }

  /** GET outputs from the server */
  refreshOutputs(refresh_from_node: boolean): void {
    if (refresh_from_node){
      this.isUpdatingEmitter.emit(true);
    }
    let output_url = this.output_url;
    if (refresh_from_node) {
      output_url += '?refresh' ;
    }
    this.http.get<OutputsResponse>(output_url)
    .subscribe( outputs_response => {
      console.dir("was refreshed: "+outputs_response[0]);
      this.outputs = outputs_response[1];
      this.isUpdatingEmitter.emit(false);
    });
  }

 refreshHeight(): void {
    this.http.get(this.node_height_url)
      .subscribe(heightInfo => {
        this.totalFailureEmitter.emit(false);
        if (heightInfo[1]) {
          this.currentNodeHeight = heightInfo[0];
          this.nodeHeightValidated = true;
        }
      },
        error => {
           this.totalFailureEmitter.emit(true);
        });
  }

  /** GET wallet summary from the server */
  refreshWalletInfo(refresh_from_node: boolean): void {
    if (refresh_from_node){
      this.isUpdatingEmitter.emit(true);
    }
    let wallet_info_url = this.wallet_info_url;
    if (refresh_from_node) {
      wallet_info_url += '?refresh' ;
    }
    this.http.get<WalletInfo>(wallet_info_url)
      .subscribe(walletInfo => {
        this.walletInfo = walletInfo;
        this.mostRecentValidatedHeight = this.walletInfo.current_height;
        if (this.walletInfo.data_confirmed) {
          this.currentNodeHeight = this.walletInfo.current_height;
          this.nodeHeightValidated = true;
        }
        this.isUpdatingEmitter.emit(false);
      });
  }

}
