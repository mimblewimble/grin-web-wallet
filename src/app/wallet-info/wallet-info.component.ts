import { Component, Input, OnInit } from '@angular/core';
import { WalletService} from '../wallet.service';
import { WalletInfo } from './walletinfo';
import { amountAsHr} from '../shared/format';

@Component({
  selector: 'app-wallet-info',
  templateUrl: './wallet-info.component.html',
  styleUrls: ['./wallet-info.component.css']
})
export class WalletInfoComponent implements OnInit {
  amountAsHr = amountAsHr;

  constructor(public walletService: WalletService) {
  }

  ngOnInit() {
  }

}
