import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewCustomerComponent } from './model/customer/components/new-customer/new-customer.component';
import { CustomerOrdersComponent } from './model/customer/components/customer-orders/customer-orders.component';
import { NewBookComponent } from './model/book/components/new-book/new-book.component';
import { UpdateBookComponent } from './model/book/components/update-book/update-book.component';
import { BookListComponent } from './model/book/components/book-list/book-list.component';

import { RegisterComponent } from './model/auth/register/register.component';
import { LoginComponent } from './model/auth/login/login.component';
import { HomeComponent } from './model/auth/home/home.component';
import { ProfileComponent } from './model/auth/profile/profile.component';
import { BoardUserComponent } from './model/auth/board-user/board-user.component';
import { BoardModeratorComponent } from './model/auth/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './model/auth/board-admin/board-admin.component';
import { ShoppingCartComponent } from './model/book/components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: 'newcustomer',
    component: NewCustomerComponent
  },
  {
    path: 'customerorder',
    component: CustomerOrdersComponent
  },
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: UpdateBookComponent },
  { path: 'newbook', component: NewBookComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'cart', component:ShoppingCartComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
