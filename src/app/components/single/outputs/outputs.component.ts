import {Component, OnInit} from '@angular/core';
import {WalletService} from '../../../services/wallet.service';
import {UtilService} from '../../../services/util.service';

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
