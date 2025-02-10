import { Component } from '@angular/core';
import { SearchProductsComponent } from '../search-products/search-products.component';
import { Router, RouterLink } from '@angular/router';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SearchProductsComponent, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart!: Cart;
  constructor(private cartService: CartService, private router: Router) {
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }
  checkout() {
    this.router.navigate(['checkout']);
  }
  removeItem(itemId: number): void {
    const itemToRemove = this.cart.items.find(
      (item) => item.product.id === itemId
    );

    if (itemToRemove) {
      this.cartService.removeItem(itemToRemove.product);
      this.setCart(); 
    }
  }
  updateCart(e: Event): void {
    e.preventDefault();
    this.cartService.clearCart();
    this.setCart();
  }
  
  incrementQuantity(item:CartItem): void {
    this.cartService.updateQuantity(item.product, item.quantity + 1);
    this.setCart();
  }

  decrementQuantity(item:CartItem): void {
    if (item.quantity > 1) {
      this.cartService.updateQuantity(item.product, item.quantity - 1);
      this.setCart();
    }
  }

}
