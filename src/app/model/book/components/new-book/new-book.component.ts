import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  book = {
    bookName: '',
    count: 0,
    price: 0.0,
    writer: '',
    published: false
  };
  submitted = false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  saveBook(): void {
    const data = {
      bookName: this.book.bookName,
      count: this.book.count,
      price: this.book.price,
      writer: this.book.writer
    };

    this.bookService.newbook(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newBook(): void {
    this.submitted = false;
    this.book = {
      bookName: '',
      count: 0,
      price: 0.0,
      writer: '',
      published: false
    };
  }


}
