import { Component, Input, OnInit } from '@angular/core';
import { WalletService} from '../../../services/wallet.service';
import {UtilService} from '../../../services/util.service';

@Component({
  selector: 'app-wallet-info',
  templateUrl: './wallet-home.component.html',
  styleUrls: ['./wallet-home.component.css']
})
export class WalletHomeComponent implements OnInit {

  constructor(public walletService: WalletService,
              public util: UtilService) {
  }

  ngOnInit() {
  }

}
