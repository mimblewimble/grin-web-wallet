import { ActivatedRoute, Resolve} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {WalletService} from '../wallet.service';
import {TxLogEntry} from '../tx-listing/tx-log-entry';
import {amountAsHr, netChange, parseConfirmed, parseDate, parseTxType} from '../shared/format';

@Component({
  selector: 'app-tx-detail',
  templateUrl: './tx-detail.component.html',
  styleUrls: ['./tx-detail.component.css']
})
export class TxDetailComponent implements OnInit {
  amountAsHr = amountAsHr;
  netChange = netChange;
  parseDate = parseDate;
  parseConfirmed = parseConfirmed;
  parseTxType = parseTxType;

  constructor(
    public walletService: WalletService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getTx();
  }

  getTx(): void {
    this.walletService.refreshTxLog(false, +this.route.snapshot.paramMap.get('id'));
  }

}
