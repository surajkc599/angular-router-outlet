import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BookstoreComponent } from '../bookstore/bookstore.component';
import { AuthorslistComponent } from '../bookstore/authorslist/authorslist.component';
import { BooksComponent } from '../bookstore/books/books.component';
import { BookDetailComponent } from '../bookstore/book-detail/book-detail.component';
import { AuthGuard } from '../shared/auth.guard';
import { ShoppingcartComponent } from '../bookstore/shoppingcart/shoppingcart.component';

const homeRoutes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            {
                path: 'bookstore', component: BookstoreComponent, children: [
                    { path: 'authors', component: AuthorslistComponent, outlet: 'authorslist' },
                    { path: 'books/:id', component: BooksComponent, outlet: 'bookslist' },
                    { path: 'book-detail/:id', component: BookDetailComponent, outlet: 'book-detail' },
                    { path: 'cart', component: ShoppingcartComponent, outlet: 'shopping-cart' }
                ], canActivateChild: [AuthGuard]
            }
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(
            homeRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRoutingModule { }
