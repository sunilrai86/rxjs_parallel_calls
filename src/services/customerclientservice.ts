import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,pipe,map } from 'rxjs';
import { Customers } from 'src/models/customers';

@Injectable({providedIn: 'root'})
export class CustomerClientService {
  private url = 'http://localhost:7011/api/customers';
  constructor(private httpClient: HttpClient) { }

  get():Observable<Customers[]>{
    const resp = this.httpClient.get<Customers[]>(this.url);
    return resp.pipe(map(result=>result));
  }

}
