import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { BooksService } from './books/books.service';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBooksPWA';
  searchForm: FormGroup;
  offline: boolean;
  isAuthenticated: boolean;
  onNetworkStatusChange() {
    this.offline = !navigator.onLine;
    console.log('offline '+this.offline);
  }

  constructor (private formBuilder: FormBuilder,
               private router: Router,
               public oktaAuth: OktaAuthService) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required],
    });
    window.addEventListener('online',  this.onNetworkStatusChange.bind(this));
    window.addEventListener('offline', this.onNetworkStatusChange.bind(this));
    this.oktaAuth.isAuthenticated().then((auth) => {this.isAuthenticated = auth});
  }

  onSearch() {
    if (!this.searchForm.valid) { return; }
    this.router.navigate(['search'], { queryParams: {query: this.searchForm.get('search').value}});
  }

  async login() {
    await this.oktaAuth.signInWithRedirect();
  }

  async logout() {
    await this.oktaAuth.signOut();
  }

}
