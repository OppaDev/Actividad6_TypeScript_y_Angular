import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Product {
  id?: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  product: Product = { name: '', price: 0 }; // No inicializar id

  constructor(private productService: ProductService, private router: Router) {}

  addProduct(): void {
    this.productService.addProduct(this.product).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}