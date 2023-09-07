import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.site/tea');
  }

  public getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.site/tea?id=${id}`);
  }

  public createOrder(data: {name: string, last_name: string, phone: string, country: string, zip: string, product: string, address: string,
    comment?: string | null}) {
    return this.http.post< {success: boolean, message?: string} >('https://testologia.site/order-tea', data);
  }
}
