import { Observable, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/domain/entity/product/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly baseUrl: string = 'http://localhost:5000/api/v1/product';

  constructor (private http: HttpClient) {}

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(take(1));
  }

  public getProductsById(idProduct: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/id/${idProduct}`).pipe(take(1));
  }

  public postProducts(Product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, Product).pipe(take(1));
  }

  public putProducts(idProduct: number, Product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/id/${idProduct}`, Product).pipe(take(1));
  }

  public deleteProductById(idProduct: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/id/${idProduct}`).pipe(take(1));
  }
  
}