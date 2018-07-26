import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OutputsComponent} from './components/single/outputs/outputs.component';
import {TxDetailComponent} from './components/single/tx-detail/tx-detail.component';
import {TxListAllComponent} from './components/single/tx-list-all/tx-list-all.component';
import {WalletHomeComponent} from './components/single/wallet-home/wallet-home.component';

const appRoutes: Routes = [
  {path: 'wallet-info', component: WalletHomeComponent},
  {path: 'wallet-outputs', component: OutputsComponent},
  {path: 'tx-detail/:id', component: TxDetailComponent},
  {path: 'txs-all', component: TxListAllComponent},
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
      {enableTracing: false} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
