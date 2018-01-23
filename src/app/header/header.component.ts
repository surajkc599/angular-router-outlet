import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../shared/bookstore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service: BookStoreService, private router: Router) { }

  activeUser: string = '';

  ngOnInit() {
    this.service.user.subscribe((data: any) => {
      this.activeUser = data;
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
