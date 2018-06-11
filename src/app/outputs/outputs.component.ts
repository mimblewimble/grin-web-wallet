import { Component, OnInit } from '@angular/core';
import { WalletService} from '../wallet.service';
import { Output } from './output';

@Component({
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.css']
})
export class OutputsComponent implements OnInit {
  outputs: Output[];
  constructor(private walletService: WalletService) { }

  getOutputs(): void {
    this.walletService.getOutputs()
      .subscribe(outputs => this.outputs = outputs);
  }

  ngOnInit() {
    this.getOutputs();
  }

}
