import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8080/read/monthlyinfo?userid=';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }

  getMonthlyOrders(userid: any): Observable<any> {
    return this.http.get(baseUrl+userid);
  }

}
