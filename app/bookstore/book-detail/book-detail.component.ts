import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../../shared/bookstore.service';
import { BookDetail } from '../../shared/bookdetail.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bookdetailService: BookStoreService) { }

  bookdetails: BookDetail;

  ngOnInit() {
    this.route.params.subscribe((params: { id: number }) => {
      this.bookdetails = this.bookdetailService.getBookDetail(params.id);
      this.bookdetailService.isDetailCompLoaded.emit(true);
    });
  }

}
