import { Component, Input, OnInit } from '@angular/core';
import { WalletService} from '../wallet.service';
import { WalletInfo } from './walletinfo';
import { amountAsHr} from '../shared/format';

@Component({
  selector: 'app-wallet-info',
  templateUrl: './wallet-info.component.html',
  styleUrls: ['./wallet-info.component.css']
})
export class WalletInfoComponent implements OnInit {
  walletInfo: WalletInfo;
  amountAsHr = amountAsHr;

  constructor(private walletService: WalletService) {
  }

  getWalletInfo(): void {
    this.walletService.getSummaryInfo()
      .subscribe(walletInfo => this.walletInfo = walletInfo);
  }
  ngOnInit() {
    this.getWalletInfo();
  }

}
