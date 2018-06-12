import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { WalletService} from './wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'Grin Wallet';

  constructor(private walletService: WalletService){
  }

  ngOnInit() {
    this.walletService.refreshHeight();
    this.walletService.refreshWalletInfo(false);
    const counter = interval(5000)
    counter.subscribe(n =>
         this.walletService.refreshHeight()
    );
  }
}
