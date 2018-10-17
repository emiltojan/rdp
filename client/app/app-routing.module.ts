import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RdpConnectionComponent }  from './components/rdp_connection/rdp_connection.component';

const routes: Routes = [
  { path: '', redirectTo: '/rdp-connection', pathMatch: 'full' },
  { path: 'rdp-connection', component: RdpConnectionComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}