import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
  id?: string;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: string | undefined): Observable<Product> {
    if (id === undefined) {
      throw new Error('El ID no puede ser indefinido.');
    }
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(product: Product): Observable<Product> {
    if (product.id === undefined) {
      throw new Error('El ID no puede ser indefinido.');
    }
    return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product);
  }

  deleteProduct(id: string | undefined): Observable<void> {
    if (id === undefined) {
      throw new Error('El ID no puede ser indefinido.');
    }
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}