import { Component, OnInit } from '@angular/core';
import { SearchProductsComponent } from '../search-products/search-products.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../shared/models/Product';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { LatestProductsComponent } from '../latest-products/latest-products.component';
@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [SearchProductsComponent, RouterLink,LatestProductsComponent],
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  productId: number | undefined;
  singleProduct: Product | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productServer: ProductsService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.productId = +params['id']; 
      this.fetchSingleProduct();
    });
  }

  private fetchSingleProduct(): void {
    if (this.productId !== undefined) {
      this.productServer
        .getProductById(this.productId)
        .then((data: Product | undefined) => {
          this.singleProduct = data;
        });
    }
  }

  addToCart(e: Event): void {
    e.preventDefault();
    if (this.singleProduct) {
      this.cartService.addToCart(this.singleProduct);
    }
  }
}
