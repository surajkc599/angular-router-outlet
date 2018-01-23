import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../header/header.module';
import { BookStoreModule } from '../bookstore/bookstore.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        HeaderModule,
        RouterModule,
        BookStoreModule,
        CommonModule,
        FormsModule
    ]
})
export class HomeModule { }
