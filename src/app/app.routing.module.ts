import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { AuthorslistComponent } from './bookstore/authorslist/authorslist.component';
import { NgModule } from '@angular/core';
import { BooksComponent } from './bookstore/books/books.component';
import { BookDetailComponent } from './bookstore/book-detail/book-detail.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'home', component: HomeComponent, children: [
            {
                path: 'bookstore', component: BookstoreComponent, children: [
                    { path: 'authors', component: AuthorslistComponent, outlet: 'authorslist' },
                    { path: 'books/:id', component: BooksComponent, outlet: 'bookslist' },
                    { path: 'book-detail/:id', component: BookDetailComponent, outlet: 'book-detail' }
                ]
            }
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
