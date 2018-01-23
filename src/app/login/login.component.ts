import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookStoreService } from '../shared/bookstore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: BookStoreService) { }

  private username: string;
  private password: string;

  ngOnInit() {
  }

  signin() {
    this.router.navigate(['home']).then(() => {
      this.service.user.emit(this.username);
      this.service.setLoggedInUser(this.username);
    }, () => {
      console.log('Route Not activated!');
    });
  }
}
