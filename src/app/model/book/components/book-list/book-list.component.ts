import { Component, OnInit } from '@angular/core';
import { Book } from '../../service/book';
import { Item } from '../../service/item';
import { BookService } from '../../service/book.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { MatDatepickerModule } from '@angular/material/datepicker';


import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {

  books?: Book[];
  sessionItembook?:Item;
  currentBook : Book = {};
  currentIndex = -1;
  bookName = '';

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(private bookService: BookService,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.retreiveBooks();
  }

  retreiveBooks(): void {
    this.bookService.getAll()
      .subscribe(
        books => {
          this.books = books;
          console.log(books);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retreiveBooks();
    this.currentBook = {};
    this.currentIndex = -1;
  }

  setActiveBook(book: Book, index: number): void {
    this.currentBook = book;
    this.currentIndex = index;
  }

  addToCart(): void {
    const user = this.tokenStorage.getUser();
    let totalItemsPrice = 0.0;
    var bookPrice_ = Number(this.currentBook.price) ;
    let count = 1 ;
    let total = bookPrice_*count;
    const sessionItembook = {
      bookId : this.currentBook.bookId,
      userId : user.id,
      count : 1,
      bookPrice : this.currentBook.price,
      totalPrice : total,
      bookName : this.currentBook.bookName
    };
    this.tokenStorage.saveOrderItem(sessionItembook);

  }


  /*deleteAllProducts(): void {
    this.productService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.readProducts();
        },
        error => {
          console.log(error);
        });
  }*/

  /*searchByName(): void {
    this.bookService.searchByName(this.name)
      .subscribe(
        products => {
          this.products = products;
          console.log(products);
        },
        error => {
          console.log(error);
        });
  }*/
}

