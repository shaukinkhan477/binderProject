import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit {
  courseId: number = -1;
  course: any;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = +params['id'];
      this.productService.getProductById(this.courseId).subscribe(product => {
        this.course = product;
      });
    });
  }

   addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

  addToWishlist(product: any): void {
    this.wishlistService.addToWishlist(product);
  }

  calculateTimeLeft(course: any): number {
    return 10;
  }
}
