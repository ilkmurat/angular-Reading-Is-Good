import { Component, OnInit } from '@angular/core';
import { CustomerOrder } from '../../service/customerorder';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {

  orders?: CustomerOrder[];
  currentOrder: CustomerOrder = {};
  currentIndex = -1;
  message = '';

  constructor(private customerOrderService: CustomerService,private route: ActivatedRoute,
    private router: Router,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.getCustomerOrders();
  }

  setActiveOrder(customerOrder: CustomerOrder, index: number): void {
    this.currentOrder = customerOrder;
    this.currentIndex = index;
  }

  getCustomerOrders(): void {
    this.currentOrder = {};
    this.currentIndex = -1;
    const user = this.tokenStorageService.getUser();
    this.customerOrderService.getCustomerOrders(user.id)
      .subscribe(
        data => {
          this.orders = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
