import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../shared/bookstore.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: BookStoreService, private route: ActivatedRoute) { }
  activeUser: string;
  ngOnInit() {
    this.route.queryParams.subscribe((params: { username: string }) => {
      this.activeUser = params.username;
    });
  }

}
