import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { BookStoreModule } from './bookstore/bookstore.module';

import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { BookStoreService } from './shared/bookstore.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeaderModule,
    LoginModule,
    HomeModule,
    BookStoreModule,
    AppRoutingModule
  ],
  providers: [BookStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
