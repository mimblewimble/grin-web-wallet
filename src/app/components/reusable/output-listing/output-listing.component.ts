import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {WalletService} from '../../../services/wallet.service';
import {UtilService} from '../../../services/util.service';
import {Output} from '../../../model/output';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-output-listing',
  templateUrl: './output-listing.component.html',
  styleUrls: ['./output-listing.component.css']
})
export class OutputListingComponent implements OnInit, OnDestroy {
  outputs: Output[];
  navigationSubscription;
  @Input() num_entries: number;

  constructor(
    public walletService: WalletService,
    public util: UtilService,
    private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.getOutputs();
      }
    });
  }

  getOutputs(): void {
    console.log('Output-Listing subscription');
    this.walletService.getOutputs()
      .subscribe((outputs) => {
        this.outputs = outputs;
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
