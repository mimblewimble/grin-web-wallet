import {ActivatedRoute, NavigationEnd, ParamMap, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {WalletService} from '../../services/wallet.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Grin Wallet';
  subCrumb = 'Info';

  constructor(private walletService: WalletService, private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.url;
        switch (url) {
          case('/wallet-outputs'):
          {
            this.subCrumb = 'Outputs';
            break;
          }
          case('/wallet-info'):
          {
            this.subCrumb = 'Info';
            break;
          }
        }
        console.log(url);
      }
    });
  }

  ngOnInit() {
    this.walletService.refreshHeight();
    this.walletService.refreshWalletInfo(false);
    const counter = interval(5000);
    counter.subscribe(n =>
      this.walletService.refreshHeight()
    );
  }
}
