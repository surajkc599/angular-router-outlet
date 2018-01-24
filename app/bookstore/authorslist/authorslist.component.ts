import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../../shared/bookstore.service';
import { Observable } from 'rxjs/Observable';
import { Author } from '../../shared/author.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorslist',
  templateUrl: './authorslist.component.html',
  styleUrls: ['./authorslist.component.scss']
})
export class AuthorslistComponent implements OnInit {

  constructor(private authorsListService: BookStoreService, private router: Router) { }

  authors: Observable<Author[]>;

  ngOnInit() {
    this.authors = this.authorsListService.getAuthorsList();
  }

   showBooks(authorId: number) {
    
  }
}
