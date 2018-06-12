import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Output} from './outputs/output';
import {WalletInfo} from './wallet-info/walletinfo';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private output_url = 'http://localhost:13420/v1/wallet/owner/retrieve_outputs';
  private wallet_info_url = 'http://localhost:13420/v1/wallet/owner/retrieve_summary_info';

  outputs: Output[];
   walletInfo: WalletInfo;

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) {
  }

  /** GET outputs from the server */
  refreshOutputs(refresh_from_node: boolean): void {
    let output_url = this.output_url;
    if (refresh_from_node) {
      output_url += '?refresh' ;
    }
    this.http.get<Output[]>(output_url)
    .subscribe( outputs => this.outputs = outputs);
  }

  /** GET wallet summary from the server */
  refreshWalletInfo(refresh_from_node: boolean): void {
    let wallet_info_url = this.wallet_info_url;
    if (refresh_from_node) {
      wallet_info_url += '?refresh' ;
    }
    this.http.get<WalletInfo>(wallet_info_url)
      .subscribe(walletInfo => this.walletInfo = walletInfo);
  }

}
