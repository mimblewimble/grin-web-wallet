import {Component, OnInit} from '@angular/core';
import {WalletService} from '../../../services/wallet.service';
import {UtilService} from '../../../services/util.service';

@Component({
  selector: 'app-output-list-display',
  templateUrl: './output-list-display.html',
  styleUrls: ['./output-list-display.css']
})
export class OutputListDisplay implements OnInit {
  constructor(public walletService: WalletService,
              public util: UtilService) {
  }

  ngOnInit() {
    this.walletService.refreshOutputs(false);
  }

}
