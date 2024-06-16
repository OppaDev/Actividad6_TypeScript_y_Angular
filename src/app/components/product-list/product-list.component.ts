import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Product {
  id?: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],
  providers: [ProductService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
  
  deleteProduct(id: string) {
    // Implementación del método
  }

  editProduct(id: string) {
    // Implementación del método
  }

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}