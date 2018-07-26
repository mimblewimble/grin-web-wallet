import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../../services/wallet.service';
import {UtilService} from '../../../services/util.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(
    public walletService: WalletService,
    public util: UtilService) { }

  refreshWalletInfo(): void {
    this.walletService.refreshWalletInfo(true);
  }

  ngOnInit() {
  }
}

