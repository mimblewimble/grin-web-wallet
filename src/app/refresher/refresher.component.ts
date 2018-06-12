import {Component, Input, OnInit} from '@angular/core';
import {WalletService} from '../wallet.service';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-refresher',
  template: ``,
})
export class RefresherComponent {
  constructor(private modalService: NgbModal, private walletService: WalletService) {
  }

  ngOnInit() {
    let modalRef;
    this.walletService.isUpdatingEmitter.subscribe(
      (value) => {
        console.log('VALUE: ' + value);
        if (value) {
            modalRef = this.modalService.open(RefresherContentComponent, {
              backdrop: 'static',
              keyboard: false,
            });
        } else {
           if (modalRef) {
             modalRef.close();
           }
        }
      }
    );
  }
}

@Component({
  selector: 'app-refresher-content',
  templateUrl: 'refresher.component.html',
})
export class RefresherContentComponent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }
}

