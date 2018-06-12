import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { WalletInfo } from '../wallet-info/walletinfo';
import { amountAsHr} from '../shared/format';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  amountAsHr = amountAsHr;

  constructor(public walletService: WalletService) {
  }

  refreshWalletInfo(): void {
    this.walletService.refreshWalletInfo(true);
  }

  ngOnInit() {
  }
}

