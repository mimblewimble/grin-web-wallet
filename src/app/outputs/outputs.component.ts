import {Component, OnInit} from '@angular/core';
import {WalletService} from '../wallet.service';
import {UtilService} from '../util.service';

@Component({
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.css']
})
export class OutputsComponent implements OnInit {
  constructor(public walletService: WalletService,
              public util: UtilService) {
  }

  ngOnInit() {
    this.walletService.refreshOutputs(false);
  }

}
