import { Component, OnInit, } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  imports:[CommonModule],
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  products: any[] = [];
  wishlistItems: any[] = [];
  previousWishlistCount: number = 0;

  constructor(private wishlistService: WishlistService,
    private productService: ProductService,
    private cartService: CartService,) { }

  ngOnInit(): void {
    this.wishlistService.getWishlistItems().subscribe(wishlistItems => {
      this.wishlistItems = wishlistItems;
      this.wishlistService.setPreviousWishlistCount(this.wishlistItems.length);
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    this.wishlistService.removeFromWishlist(product);
  }

  removeFromWishlist(product: any): void {
    this.wishlistService.removeFromWishlist(product);
  }

  removeFromCart(product: any): void {
    this.cartService.removeFromCart(product);
  }
}
