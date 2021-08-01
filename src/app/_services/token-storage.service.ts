import { Injectable } from '@angular/core';
import { Item } from '../model/book/service/item';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const ORDER_KEY ='order-key';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public saveOrderItem(order: Item): void {
    const ex = this.getItems();
    const itemList =[];
    for (let index = 0; index < ex.length; index++) {
      const element = ex[index];
      itemList.push(element);
    }

    itemList.push(order);

    window.sessionStorage.removeItem(ORDER_KEY);
    window.sessionStorage.setItem(ORDER_KEY, JSON.stringify(itemList));
  }

  public removeOrderItem(order: Item): void {
    const ex = this.getItems();
    for (let index = 0; index < ex.length; index++) {
      const element = ex[index];
      if(element.bookId==order.bookId){
        ex.splice(index,1);
      }
    }

    window.sessionStorage.removeItem(ORDER_KEY);
    window.sessionStorage.setItem(ORDER_KEY, JSON.stringify(ex));
  }

  public clearOrderItems(): void {
    window.sessionStorage.removeItem(ORDER_KEY);
  }


  public getItems() : any | null{
    const item = window.sessionStorage.getItem(ORDER_KEY);
    if (item) {
      return JSON.parse(item);
    }

    return {};
  }
  

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}