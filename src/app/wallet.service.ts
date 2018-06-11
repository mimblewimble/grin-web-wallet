import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Output } from './outputs/output';
import { WalletInfo } from './wallet-info/walletinfo';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private output_url = 'http://localhost:13420/v1/wallet/owner/retrieve_outputs';
  private wallet_info_url = 'http://localhost:13420/v1/wallet/owner/retrieve_summary_info';

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) { }

 /** GET outputs from the server */
 getOutputs (): Observable<Output[]> {
   return this.http.get<Output[]>(this.output_url);
 }

  /** GET wallet summary from the server */
  getSummaryInfo (): Observable<WalletInfo> {
    return this.http.get<WalletInfo>(this.wallet_info_url);
  }
}
