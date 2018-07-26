import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {WalletService} from '../../../services/wallet.service';
import {TxLogEntry} from '../../../model/tx-log-entry';
import {UtilService} from '../../../services/util.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-tx-listing',
  templateUrl: './tx-listing.component.html',
  styleUrls: ['./tx-listing.component.css']
})
export class TxListingComponent implements OnInit, OnDestroy {
  txs: TxLogEntry[];
  navigationSubscription;
  @Input() num_entries: number;

  constructor(public walletService: WalletService,
              public util: UtilService,
              private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.getTxs();
      }
    });
  }

  getTxs(): void {
    console.log('Tx-Listing subscription');
    this.walletService.getTxLogs()
      .subscribe((txs) => {
        this.txs = txs;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
