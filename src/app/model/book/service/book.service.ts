import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:8080/read/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  get(id:any): Observable<any> {
    return this.httpClient.get('${baseURL}/${id}');
  }

  newbook(data:any): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  update(id:any, data:any): Observable<any> {
    return this.httpClient.put('${baseURL}/${id}', data);
  }
/*
  delete(id): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }

  searchByName(name): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${name}`);
  }*/
}
