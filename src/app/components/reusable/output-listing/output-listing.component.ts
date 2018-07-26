import {Component, Input, OnInit} from '@angular/core';
import {WalletService} from '../../../services/wallet.service';
import {UtilService} from '../../../services/util.service';
import {Output} from '../../../model/output';

@Component({
  selector: 'app-output-listing',
  templateUrl: './output-listing.component.html',
  styleUrls: ['./output-listing.component.css']
})
export class OutputListingComponent implements OnInit {
  outputs: Output[];
  @Input() num_entries: number;

  constructor(
    public walletService: WalletService,
    public util: UtilService
  ) {
  }

  getOutputs(): void {
    console.log('Output-Listing subscription');
    this.walletService.getOutputs()
      .subscribe((outputs) => {
        this.outputs = outputs;
      });
  }

  ngOnInit() {
    this.getOutputs();
  }

}
