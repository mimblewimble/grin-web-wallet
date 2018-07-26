import {Component, Input, OnInit} from '@angular/core';
import {WalletService} from '../../../services/wallet.service';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-refresher',
  template: ``,
})
export class RefresherComponent {
  constructor(private modalService: NgbModal, private walletService: WalletService) {
  }

  ngOnInit() {
    let refresherModalRef = null;
    let failureModalRef;
    this.walletService.isUpdatingEmitter.subscribe(
      (value) => {
        if (value) {
          refresherModalRef = this.modalService.open(RefresherContentComponent, {
            backdrop: 'static',
            keyboard: false,
            centered: true,
          });
        } else {
          if (refresherModalRef) {
            refresherModalRef.close();
          }
        }
      }
    );
    this.walletService.totalFailureEmitter.subscribe(
      (value) => {
        if (value && ! failureModalRef) {
          failureModalRef = this.modalService.open(FailureContentComponent, {
            backdrop: 'static',
            keyboard: false,
            centered: true,
            size: 'lg'
          });
        } else {
          if (!value && failureModalRef) {
            this.walletService.refreshWalletInfo(false);
            failureModalRef.close();
            failureModalRef = null;
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

@Component({
  selector: 'app-failure-content',
  templateUrl: 'failure.component.html',
})
export class FailureContentComponent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }
}
