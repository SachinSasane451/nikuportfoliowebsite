import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

 constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>('assets/data/portfolio.json');
  }
}


