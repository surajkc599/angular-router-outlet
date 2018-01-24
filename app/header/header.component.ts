import { Component, OnInit, Input } from '@angular/core';
import { BookStoreService } from '../shared/bookstore.service';
import { Router } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service: BookStoreService, private router: Router) { }
  activeUser: string;
  @Input()
  set loggedInUser(user: string) {
      this.activeUser = user;
  }

  ngOnInit() {
  }

  signout() {
    this.router.navigate(['']).then(() => {
      this.service.clearOnLogOut();
    }, () => {
      console.log('Route Not activated!');
    });
  }

}
