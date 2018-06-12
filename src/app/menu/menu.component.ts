import { Component, OnInit } from '@angular/core';
import { WalletService} from '../wallet.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public walletService: WalletService) { }

  ngOnInit() {
  }

}
