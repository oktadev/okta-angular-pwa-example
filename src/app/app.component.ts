import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularBooksPWA';
  searchForm: FormGroup;
  isAuthenticated: boolean;
  offline: boolean;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              public oktaAuth: OktaAuthService) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

  ngOnInit(): void {
    this.oktaAuth.isAuthenticated().then((auth) => {this.isAuthenticated = auth});
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required],
    });
    window.addEventListener('online',  this.onNetworkStatusChange.bind(this));
    window.addEventListener('offline', this.onNetworkStatusChange.bind(this));
  }

  onSearch(): void {
    if (!this.searchForm.valid) { return; }
    this.router.navigate(['search'], { queryParams: {query: this.searchForm.get('search').value}});
  }

  async login(): Promise<void> {
    await this.oktaAuth.signInWithRedirect();
  }

  async logout(): Promise<void> {
    await this.oktaAuth.signOut();
  }

  onNetworkStatusChange(): void {
    this.offline = !navigator.onLine;
    console.log('offline ' + this.offline);
  }
}
