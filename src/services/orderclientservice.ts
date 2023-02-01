import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,pipe,map } from 'rxjs';
import { Orders } from 'src/models/orders';

@Injectable({providedIn: 'root'})
export class OrderClientService {
  private url:string ='http://localhost:7012/api/orders';
  constructor(private httpClient: HttpClient) { }

  get():Observable<Orders[]> {
    const resp = this.httpClient.get<Orders[]>(this.url);
    return resp.pipe(map(result=>result));
  }
}
