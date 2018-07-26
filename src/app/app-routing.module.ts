import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OutputListDisplayComponent} from './components/single/output-list-display/output-list-display';
import {TxDetailDisplayComponent} from './components/single/tx-detail-display/tx-detail-display.component';
import {TxListDisplayComponent} from './components/single/tx-list-display/tx-list-display.component';
import {WalletHomeComponent} from './components/single/wallet-home/wallet-home.component';

const appRoutes: Routes = [
  {path: 'wallet-info', component: WalletHomeComponent},
  {path: 'wallet-outputs', component: OutputListDisplayComponent},
  {path: 'tx-detail/:id', component: TxDetailDisplayComponent},
  {path: 'txs-all', component: TxListDisplayComponent},
  {
    path: '',
    redirectTo: '/wallet-info',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false, onSameUrlNavigation: 'reload'}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
