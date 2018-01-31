import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivationStart } from '@angular/router';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookstoreComponent implements OnInit {

  constructor(private route: Router) { }
  @HostBinding('class.isActive') isShowCart: boolean = false;

  ngOnInit() {
    this.route.events.subscribe((event: any) => {
      if (event instanceof ActivationStart && event.snapshot.outlet === 'shopping-cart') {
        this.isShowCart = true;
      }
    });
  }
}
