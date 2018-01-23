import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BookstoreComponent } from './bookstore.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AuthorslistComponent } from './authorslist/authorslist.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        BookstoreComponent,
        BooksComponent,
        BookDetailComponent,
        AuthorslistComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ]
})
export class BookStoreModule { }
