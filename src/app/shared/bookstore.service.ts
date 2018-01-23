import { Injectable, Output, EventEmitter } from '@angular/core';
import { Book } from './book.model';
import { Author } from './author.model';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BookDetailComponent } from '../bookstore/book-detail/book-detail.component';
import { BookDetail } from './bookdetail.model';

@Injectable()
export class BookStoreService {

    @Output() user = new EventEmitter();
    @Output() isDetailCompLoaded = new EventEmitter<boolean>();

    loggedInUser: string;

    authors = [
        new Author('Suraj', 1, 'Eindhoven', 27, [
            new Book(100, 'Angular 2'),
            new Book(200, 'Java'),
            new Book(300, 'JavaScript')
        ]),
        new Author('Sandeep', 2, 'Eindhoven', 30, [
            new Book(400, 'Cloud technology'),
            new Book(500, 'Python'),
            new Book(600, 'TypeScript')
        ])
    ];

    bookdetails: BookDetail[] = [
        {
            'bookName': 'Angular 2', 'bookId': 100, 'bookAuthor': 'Suraj', 'publishedDate': '12/12/2017',
            'availableCentres': ['Eindhoven', 'Tilburg']
        },
        {
            'bookName': 'Java', 'bookId': 200, 'bookAuthor': 'Suraj', 'publishedDate': '12/12/2017',
            'availableCentres': ['Eindhoven', 'Tilburg', 'Breda']
        },
        {
            'bookName': 'JavaScript', 'bookId': 300, 'bookAuthor': 'Suraj', 'publishedDate': '12/12/2017',
            'availableCentres': ['Eindhoven', 'Tilburg', 'Bangalore']
        },
        {
            'bookName': 'Cloud technology', 'bookId': 400, 'bookAuthor': 'Sandeep', 'publishedDate': '12/09/2015',
            'availableCentres': ['Amsterdam', 'Eindhoven', 'Tilburg']
        },
        {
            'bookName': 'Python', 'bookId': 500, 'bookAuthor': 'Sandeep', 'publishedDate': '12/09/2015',
            'availableCentres': ['Amsterdam', 'Eindhoven', 'Tilburg', 'Breda']
        },
        {
            'bookName': 'TypeScript', 'bookId': 600, 'bookAuthor': 'Sandeep', 'publishedDate': '12/09/2015',
            'availableCentres': ['Amsterdam', 'Eindhoven', 'Tilburg', 'Bangalore']
        }
    ];

    setLoggedInUser(name: string) {
        if (name) {
            this.loggedInUser = name;
        }
    }

    clearOnLogOut() {
        this.loggedInUser = null;
        this.user.emit(this.loggedInUser);
    }

    getAuthorsList() {
        return Observable.of(this.authors);
    }

    getBooks(authorId: number) {
        const authorObject = this.authors.find(author => author.authId === Number(authorId));
        return authorObject.books;
    }

    getBookDetail(bookId: number) {
        const bookDetailObject = this.bookdetails.find(bookDetail => bookDetail.bookId === Number(bookId));
        return bookDetailObject;
    }
}
