import { Component, Input, OnInit } from '@angular/core';
import {WalletService} from '../../../services/wallet.service';
import {TxLogEntry} from '../../../model/tx-log-entry';
import {UtilService} from '../../../services/util.service';

@Component({
  selector: 'app-tx-listing',
  templateUrl: './tx-listing.component.html',
  styleUrls: ['./tx-listing.component.css']
})
export class TxListingComponent implements OnInit {
  txs: TxLogEntry[];
  @Input() num_entries: number;

  constructor(
    public walletService: WalletService,
    public util: UtilService
  ) { }

  getTxs(): void {
    console.log('Tx-Listing subscription');
    this.walletService.getTxLogs()
      .subscribe((txs) => {
        this.txs = txs;
    });
  }

  ngOnInit() {
    this.getTxs();
  }

}
