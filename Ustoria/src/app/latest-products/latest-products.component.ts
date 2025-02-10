import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Product } from '../shared/models/Product';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-latest-products',
  standalone: true,
  imports: [CarouselModule, ButtonModule, RouterLink],
  templateUrl: './latest-products.component.html',
  styleUrl: './latest-products.component.css',
})
export class LatestProductsComponent implements OnInit {
  products: Product[] = [];
  responsiveOptions = [
    {
      breakpoint: '1600px',
      numVisible: 5,
      numScroll: 5,
    },
  ];
  constructor(
    private cartService: CartService,
    private productService: ProductsService
  ) {}
  ngOnInit(): void {
    this.productService
      .getCarouselInfo()
      .then((carousel) => (this.products = carousel));
  }

  addToCart(item: Product) {
    this.cartService.addToCart(item);
  }
}
