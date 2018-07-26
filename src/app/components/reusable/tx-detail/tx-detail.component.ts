import {Component, OnDestroy, OnInit} from '@angular/core';
import {WalletService} from '../../../services/wallet.service';
import {UtilService} from '../../../services/util.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {TxLogEntry} from '../../../model/tx-log-entry';

@Component({
  selector: 'app-tx-detail',
  templateUrl: './tx-detail.component.html',
  styleUrls: ['./tx-detail.component.css']
})
export class TxDetailComponent implements OnInit, OnDestroy {

  tx: TxLogEntry;
  navigationSubscription;

  constructor(public walletService: WalletService,
              public util: UtilService,
              private router: Router,
              private route: ActivatedRoute,
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        const id = this.route.snapshot.paramMap.get('id');
        this.getTx(+id);
      }
    });
  }

  ngOnInit() {
  }

  getTx(id: number): void {
    console.log('Get TX Subscription');
    this.walletService.getTxLog(id)
      .subscribe((tx) => {
        this.tx = tx;
      });
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
