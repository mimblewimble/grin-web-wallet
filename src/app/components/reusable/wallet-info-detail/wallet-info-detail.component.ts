import {Component, OnInit} from '@angular/core';
import {WalletService} from '../../../services/wallet.service';
import {UtilService} from '../../../services/util.service';
import {WalletInfo} from '../../../model/walletinfo';

@Component({
  selector: 'app-wallet-info-detail',
  templateUrl: './wallet-info-detail.component.html',
  styleUrls: ['./wallet-info-detail.component.css']
})
export class WalletInfoDetailComponent implements OnInit {

  info: WalletInfo;

  constructor(public walletService: WalletService,
              public util: UtilService) {
  }

  getWalletInfo(): void {
    console.log('Wallet-info subscription');
    this.walletService.getWalletInfo()
      .subscribe((info) => {
        this.info = info;
      });
  }

  ngOnInit() {
    this.getWalletInfo();
  }

}
