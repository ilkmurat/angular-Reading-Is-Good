import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Item } from '../../service/item';
import { OrderService } from 'src/app/model/order/service/order.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  carts?: Item[];
  total?: number;
  submitted = false;
  createCustOrderId?: number;

  constructor(private http: BookService, private token: TokenStorageService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.carts = this.token.getItems();
    this.getTotal();
  }

  getTotal(): void {
    let calculateTotal = 0.0;
    const cartItemList = this.token.getItems();
    for (let index = 0; index < cartItemList.length; index++) {
      const element = cartItemList[index];
      var elementTotalPrice = Number(element.totalPrice);
      calculateTotal = calculateTotal + elementTotalPrice;
    }
    this.total = calculateTotal;
  }

  removeFromCart(removeItem: Item): void {
    this.token.removeOrderItem(removeItem);
    window.location.reload();
  }

  makeOrder(): void {
    const cartItemList = this.token.getItems();
    this.createCustOrdID();
    for (let index = 0; index < cartItemList.length; index++) {
      const element = cartItemList[index];
      const data = {
        customerOrderId: this.createCustOrderId,
        bookId: element.bookId,
        userId: element.userId,
        count: element.count,
        totalPrice: element.totalPrice
      };

      this.orderService.makeOrder(data)
        .subscribe(
          response => {
            console.log(response);
            this.submitted = true;
          },
          error => {
            console.log(error);
          });
    }
    this.resetItems();
  }

  resetItems(): void {
    this.submitted = false;
    this.token.clearOrderItems();
  }

  createCustOrdID(): void {
    let custOrdId= Math.floor((Math.random() * 1000000) + 100);
    this.createCustOrderId = custOrdId;
  }
  
}
