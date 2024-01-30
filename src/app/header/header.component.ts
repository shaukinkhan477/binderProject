import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { WishlistService } from '../wishlist.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, FormsModule, RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  searchText: string = '';
  sortedProducts: any[] = [];
  cartCount: number = 0;
  header_variable = false;

  @Input() showHeader: boolean = true;

  constructor(private cartService: CartService,
    private productService: ProductService,
  private wishlistService: WishlistService) { }

   ngOnInit(): void {
    this.cartService.getCartCount().subscribe((count: number) => {
      this.cartCount = count;
    });
  }

   @HostListener("document:scroll")
  onScrolled() {
     if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
     {
      this.header_variable = true;
     }
    else {
             this.header_variable = false;
     }
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

  addToWishlist(product: any): void {
    this.wishlistService.addToWishlist(product);
  }


  searchCourses() {
    // Filter courses based on searchText
    this.productService.getProducts().subscribe((products: any[]) => {
      this.sortedProducts = products.filter((product) => this.matchesSearchCriteria(product));
    });
  }



   sortCourses(order: 'lowest' | 'highest') {
    // Sort courses based on price
    if (order === 'lowest') {
      this.sortedProducts.sort((a, b) => a.actualPrice - b.actualPrice);
    } else if (order === 'highest') {
      this.sortedProducts.sort((a, b) => b.actualPrice - a.actualPrice);
    }
  }

    private matchesSearchCriteria(product: any): boolean {
    // Function to check if a product matches the search criteria
    const searchString = this.searchText.toLowerCase();
    const courseName = product.courseName.toLowerCase();
    const author = product.author.toLowerCase();
     const tags = product.tags && Array.isArray(product.tags) ? product.tags.map((tag: string) => tag.toLowerCase()) : [];

    return (
      courseName.includes(searchString) || author.includes(searchString) || tags.includes(searchString)
    );
  }

}
