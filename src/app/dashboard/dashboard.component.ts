import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, RouterModule, CommonModule, MatPaginator, MatPaginatorModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

currentPage = 0;
products: any[] = [];
defaultPageSize = 3;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.pageSlice = this.products.slice(0, this.defaultPageSize);
    });
  }

   navigateToCourseDetail(courseId: number): void {
    this.router.navigate(['/course', courseId]);
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

  addToWishlist(product: any): void {
    this.wishlistService.addToWishlist(product);
  }

  public pageSlice = this.products.slice(0, 3)

  onPageChange(event: PageEvent) {
    console.log(event);
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.products.length) {
           endIndex = this.products.length
    }
    this.pageSlice = this.products.slice(startIndex, endIndex)

  }
}
