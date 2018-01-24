import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../shared/book.model';
import { BookStoreService } from '../../shared/bookstore.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authorsListService: BookStoreService, private router: Router) { }

  bookslist: Book[];
  authorId: number;
  isDetailCompLoaded: boolean;

  ngOnInit() {
    this.route.params.subscribe((params: { id: number }) => {
      this.authorId = params.id;
      this.bookslist = this.authorsListService.getBooks(params.id);
      if (this.isDetailCompLoaded) {
            this.router.navigate(['/home/bookstore', { outlets: { 'book-detail': [ 'book-detail', this.bookslist[0].bookId ] }}]);
      }
    });
    this.authorsListService.isDetailCompLoaded.subscribe((isLoad: boolean) => {
      this.isDetailCompLoaded = isLoad;
    });
  }

}
