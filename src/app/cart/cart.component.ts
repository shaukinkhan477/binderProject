import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { WishlistService } from '../wishlist.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  products: any[] = [];
  totalPrice: number = 0;
  totalSavings: number = 0;

  constructor(private cartService: CartService,
    private wishlistService: WishlistService,
  private productService: ProductService,) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(cartItems => {
      this.cartItems = cartItems;
      this.calculateTotalPriceAndSavings();

    });
     this.productService.getProducts().subscribe(products => {
       this.products = products;

    });
  }

  removeFromCart(product: any): void {
    this.cartService.removeFromCart(product);
    this.calculateTotalPriceAndSavings();
  }

  checkout(): void {
     if (this.cartItems.length === 0) {
      alert('There is no item in your cart. Please add items to the cart.');
    } else {
       alert('Thanks for For Shoping with Us  ');
      this.cartService.clearCart();
      this.calculateTotalPriceAndSavings();
    }
  }

  addToWishlist(product: any): void {
    this.wishlistService.addToWishlist(product);
  }

  private calculateTotalPriceAndSavings(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + parseFloat(item.discountPrice.replace('₹', '')), 0);
    this.totalSavings = this.cartItems.reduce(
      (total, item) => total + (parseFloat(item.actualPrice.replace('₹', '')) - parseFloat(item.discountPrice.replace('₹', ''))),
      0
    );
  }


}
