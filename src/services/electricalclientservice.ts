import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from './../models/product';
import { map, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ElectricalClientService {

  private url:string ='http://localhost:8012/api/products/electrical';
  constructor(private httpClient: HttpClient) { }

  get():Observable<Product[]>{
    const resp = this.httpClient.get<Product[]>(this.url);
    return resp.pipe(map(result=>result));
  }
}
