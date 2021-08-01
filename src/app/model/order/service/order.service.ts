import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:8080/read/makeorder';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor(private httpClient: HttpClient) { }

  makeOrder(data:any): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }
}
