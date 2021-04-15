import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private subscription: Subscription;
  book: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe(params => {
      this.updateDetails(params);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateDetails(book) {
    this.book = book;
  }
}
