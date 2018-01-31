import { Component, OnInit, Input } from '@angular/core';
import { BookStoreService } from '../shared/bookstore.service';
import { Router } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { BookDetail } from '../shared/bookdetail.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service: BookStoreService, private router: Router) { }

  activeUser: string;
  cartInformation: number;

  @Input()
  set loggedInUser(user: string) {
    this.activeUser = user;
  }

  ngOnInit() {
    this.service.shoppingCartListModified.subscribe((data: number) => {
      this.cartInformation = data;
    });
  }

  signout() {
    this.router.navigate(['']).then(() => {
      this.service.clearOnLogOut();
    }, () => {
      console.log('Route Not activated!');
    });
  }
}
