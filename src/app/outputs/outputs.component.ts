import { Component, OnInit } from '@angular/core';
import { WalletService} from '../wallet.service';
import { Output } from './output';
import {WalletInfo} from '../wallet-info/walletinfo';
import { amountAsHr} from '../shared/format';

@Component({
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.css']
})
export class OutputsComponent implements OnInit {
  outputs: Output[];
  walletInfo: WalletInfo;
  amountAsHr = amountAsHr;
  constructor(private walletService: WalletService) { }

  getOutputs(): void {
    this.walletService.getOutputs()
      .subscribe(outputs => this.outputs = outputs);
    this.walletService.getSummaryInfo()
      .subscribe(walletInfo => this.walletInfo = walletInfo);
  }

  ngOnInit() {
    this.getOutputs();
  }

}
