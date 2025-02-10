import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Product } from '../shared/models/Product';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ustoraImage: string = 'assets/logo.png';
  totalPrice: number = 0;
  count: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.updateCartInfo();

    this.cartService.getCartUpdateObservable().subscribe(() => {
      this.updateCartInfo();
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  private updateCartInfo(): void {
    const cart = this.cartService.getCart();
    this.totalPrice =
      cart.items.length > 0 ? this.cartService.getTotalPrice() : 0;
    this.count = cart.items.length;
  }
}
