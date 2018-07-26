import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../../services/wallet.service';
import {UtilService} from '../../../services/util.service';
import {WalletInfo} from '../../../model/walletinfo';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  info: WalletInfo;

  constructor(
    public walletService: WalletService,
    public util: UtilService) { }

  getWalletInfo(): void {
    console.log('Summary Wallet-info subscription');
    this.walletService.getWalletInfo()
      .subscribe((info) => {
        this.info = info;
      });
  }

  ngOnInit() {
    this.getWalletInfo();
  }

  refreshWallet(): void {

  }
}

