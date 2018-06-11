import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { WalletInfo } from './walletinfo';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  walletInfo: WalletInfo;
  model = {
    left: true,
    middle: false,
    right: false
  };

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

