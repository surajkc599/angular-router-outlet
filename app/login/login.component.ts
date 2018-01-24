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
    if (this.username === 'suraj' && this.password === 'test123') {
      this.service.LoggedInUser = this.username;
      this.router.navigate(['/home'], { queryParams: { username: this.username } }).then(() => {
        console.log('Router activated!');
      }, (data: any) => {
        console.log('Route Not activated!', data);
      });
    }
  }
}
