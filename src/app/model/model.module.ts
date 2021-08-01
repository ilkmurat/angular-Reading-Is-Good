import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCustomerComponent } from './customer/components/new-customer/new-customer.component';
import { CustomerOrdersComponent } from './customer/components/customer-orders/customer-orders.component';
import { NewBookComponent } from './book/components/new-book/new-book.component';
import { UpdateBookComponent } from './book/components/update-book/update-book.component';

import { BookService } from './book/service/book.service';
import { CustomerService } from './customer/service/customer.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book/components/book-list/book-list.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './auth/home/home.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { BoardAdminComponent } from './auth/board-admin/board-admin.component';
import { BoardModeratorComponent } from './auth/board-moderator/board-moderator.component';
import { BoardUserComponent } from './auth/board-user/board-user.component';
import { ShoppingCartComponent } from './book/components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [NewCustomerComponent, 
    CustomerOrdersComponent, 
    NewBookComponent, 
    UpdateBookComponent, 
    BookListComponent, 
    LoginComponent, 
    RegisterComponent, 
    HomeComponent, 
    ProfileComponent, 
    BoardAdminComponent, 
    BoardModeratorComponent, 
    BoardUserComponent, ShoppingCartComponent],
  providers: [BookService,CustomerService],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [NewCustomerComponent, NewBookComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ModelModule { }
