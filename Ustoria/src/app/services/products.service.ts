import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsApiUrl = 'http://localhost:3000/products';
  products: Product[] = [];

  carousel: Product[] = [];
  constructor() {}

  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.productsApiUrl);
    return (await data.json()) ?? [];
  }
  async getProductById(id: number): Promise<Product | undefined> {
    const data = await fetch(`${this.productsApiUrl}/${id}`);

    return (await data.json()) ?? {};
  }
  getTotalProductsPrice(): number {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
  async getCarouselInfo(): Promise<Product[]> {
    if (this.carousel.length === 0) {
      const allProducts = await this.getAllProducts();
      this.carousel = allProducts.slice(0, 6);
    }
    return this.carousel;
  }
}
