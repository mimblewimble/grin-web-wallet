import { Component, Input, OnInit } from '@angular/core';
import {amountAsHr, netChange, parseDate, parseConfirmed, parseTxType} from '../shared/format';
import {WalletService} from '../wallet.service';

@Component({
  selector: 'app-tx-listing',
  templateUrl: './tx-listing.component.html',
  styleUrls: ['./tx-listing.component.css']
})
export class TxListingComponent implements OnInit {
  amountAsHr = amountAsHr;
  netChange = netChange;
  parseDate = parseDate;
  parseConfirmed = parseConfirmed;
  parseTxType = parseTxType;
  @Input() num_entries: number;

  constructor(public walletService: WalletService) {
  }

  refreshTxs(): void {
    this.walletService.refreshTxLog(false, 0);
  }

  ngOnInit() {
    this.refreshTxs();
  }

  txDetail(id:number) {

  }

}
