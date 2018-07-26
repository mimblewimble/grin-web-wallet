import { Component, Input, OnInit } from '@angular/core';
import { WalletService} from '../../../services/wallet.service';
import {UtilService} from '../../../services/util.service';

@Component({
  selector: 'app-wallet-info',
  templateUrl: './wallet-info.component.html',
  styleUrls: ['./wallet-info.component.css']
})
export class WalletInfoComponent implements OnInit {

  constructor(public walletService: WalletService,
              public util: UtilService) {
  }

  refreshWalletInfo(): void {
    this.walletService.refreshWalletInfo(true);
  }

  ngOnInit() {
  }

}
