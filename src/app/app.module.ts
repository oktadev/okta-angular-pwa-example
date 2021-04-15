import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatToolbarModule,
         MatMenuModule,
         MatIconModule,
         MatCardModule,
         MatButtonModule,
         MatTableModule,
         MatDividerModule,
         MatProgressSpinnerModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { RequestCache } from './cache/request-cache.service';
import { CachingInterceptor } from './cache/caching-interceptor.service';

const oktaConfig = {
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  clientId: '{clientId}',
  redirectUri: window.location.origin + '/callback'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    OktaAuthModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig },
    RequestCache,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
