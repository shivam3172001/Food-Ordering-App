import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItem';  // Assuming this is the correct path

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
})
export class CheckoutPageComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  shippingDetails: any = { address: '', city: '', zip: '' };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();  // Gets cart items from the service
    this.totalPrice = this.cartService.getTotal();  // Gets total price from the service
  }

  onSubmit(): void {
    // Validate if all shipping details are provided
    if (!this.shippingDetails.address || !this.shippingDetails.city || !this.shippingDetails.zip) {
      alert('Please fill in all shipping details.');
      return;
    }

    // Simulate order submission (e.g., API call to backend)
    alert('Order placed successfully!');
    
    // Optionally clear the cart and reset shipping details after order
    this.cartService.clearCart();
    this.shippingDetails = { address: '', city: '', zip: '' };  // Reset shipping details
  }
}
