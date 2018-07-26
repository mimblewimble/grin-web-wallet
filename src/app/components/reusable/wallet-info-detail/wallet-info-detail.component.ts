import {Component, OnDestroy, OnInit} from '@angular/core';
import {WalletService} from '../../../services/wallet.service';
import {UtilService} from '../../../services/util.service';
import {WalletInfo} from '../../../model/walletinfo';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-wallet-info-detail',
  templateUrl: './wallet-info-detail.component.html',
  styleUrls: ['./wallet-info-detail.component.css']
})
export class WalletInfoDetailComponent implements OnInit, OnDestroy {

  info: WalletInfo;
  navigationSubscription;

  constructor(public walletService: WalletService,
              public util: UtilService,
              private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.getWalletInfo();
      }
    });
  }

  getWalletInfo(): void {
    console.log('Wallet-info subscription');
    this.walletService.getWalletInfo()
      .subscribe((info) => {
        this.info = info;
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
