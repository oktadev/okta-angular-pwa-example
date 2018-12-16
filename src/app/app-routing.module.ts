import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent, canActivate: [OktaAuthGuard] },
  { path: 'details', component: DetailsComponent, canActivate: [OktaAuthGuard] },
  { path: 'implicit/callback', component: OktaCallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
