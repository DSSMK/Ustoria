import { Component, OnInit } from '@angular/core';
import { SearchProductsComponent } from '../search-products/search-products.component';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/Cart';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [SearchProductsComponent, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberme: new FormControl(false),
  });
  cart!: Cart;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }
  onSubmit() {
    console.log(`welcome, you have signed in ❤`);
    const username = document.getElementById('username')! as HTMLInputElement;
    const password = document.getElementById('password')! as HTMLInputElement;
    username.value = '';
    password.value = '';
  }
}
