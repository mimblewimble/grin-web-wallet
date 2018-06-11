import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {OutputsComponent} from './outputs/outputs.component';
import {SummaryComponent} from './summary/summary.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faQuestionCircle,
  faSyncAlt,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';

library.add(faArrowAltCircleDown);
library.add(faArrowAltCircleUp);
library.add(faSyncAlt);
library.add(faWallet);
library.add(faQuestionCircle);

@NgModule({
  declarations: [
    AppComponent,
    OutputsComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
