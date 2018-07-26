import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './components/app/app.component';
import {AppRoutingModule} from './app-routing.module';
import {OutputsComponent} from './components/single/outputs/outputs.component';
import {SummaryComponent} from './components/single/summary/summary.component';
import {MenuComponent} from './components/single/menu/menu.component';
import {WalletHomeComponent} from './components/single/wallet-home/wallet-home.component';
import {WalletService} from './services/wallet.service';
import {UtilService} from './services/util.service';
import {FailureContentComponent, RefresherComponent, RefresherContentComponent} from './components/single/refresher/refresher.component';
import {SenderAlertComponent, SenderComponent, SenderContentComponent} from './components/single/sender/sender.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faQuestionCircle,
  faSyncAlt,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import { TxListingComponent } from './components/reusable/tx-listing/tx-listing.component';
import { TxListDisplayComponent } from './components/single/tx-list-display/tx-list-display.component';
import { TxDetailDisplayComponent } from './components/single/tx-detail-display/tx-detail-display.component';
import { TxDetailComponent} from './components/reusable/tx-detail/tx-detail.component';
import { WalletInfoDetailComponent } from './components/reusable/wallet-info-detail/wallet-info-detail.component';

library.add(faArrowAltCircleDown);
library.add(faArrowAltCircleUp);
library.add(faSyncAlt);
library.add(faWallet);
library.add(faQuestionCircle);

@NgModule({
  declarations: [
    AppComponent,
    OutputsComponent,
    SummaryComponent,
    MenuComponent,
    WalletHomeComponent,
    RefresherComponent,
    RefresherContentComponent,
    FailureContentComponent,
    SenderAlertComponent,
    SenderComponent,
    SenderContentComponent,
    TxListingComponent,
    TxListDisplayComponent,
    TxDetailComponent,
    TxDetailDisplayComponent,
    WalletInfoDetailComponent,
  ],
  entryComponents: [RefresherContentComponent,
  FailureContentComponent,
  SenderContentComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [WalletService, UtilService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
