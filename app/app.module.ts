import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { HeaderModule } from './header/header.module';
import { BookStoreModule } from './bookstore/bookstore.module';

import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { BookStoreService } from './shared/bookstore.service';
import { AuthGuard } from './shared/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeaderModule,
    LoginModule,
    BookStoreModule,
    AppRoutingModule
  ],
  providers: [BookStoreService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
