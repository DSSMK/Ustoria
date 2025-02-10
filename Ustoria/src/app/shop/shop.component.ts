import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/Product';
import { ProductsService } from '../services/products.service';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.productService
      .getAllProducts()
      .then((products) => (this.products = products));
  }
  addToCart(item: Product) {
    this.cartService.addToCart(item);
  }
}
