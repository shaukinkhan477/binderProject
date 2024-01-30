import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MatIconModule } from '@angular/material/icon';
import { CoursesComponent } from "./courses/courses.component";
import { CartComponent } from "./cart/cart.component";
import { MyprofileComponent } from "./myprofile/myprofile.component";
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistService } from './wishlist.service';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,CommonModule,HeaderComponent, DashboardComponent, MatIconModule, CoursesComponent, CartComponent, MyprofileComponent,WishlistComponent]
})
export class AppComponent implements OnInit {
  title = 'BindersProject';
  showWishlistModal: boolean = false;
  wishlistModalMessage: string = '';
  showHeader: boolean = true;


  constructor(private wishlistService: WishlistService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check the current route and hide the header on the login page
        this.showHeader = !event.url.includes('/login');
      }
    });
     }

  ngOnInit(): void {
    this.wishlistService.getWishlistItems().subscribe(items => {
      if (items.length > this.wishlistService.getPreviousWishlistCount()) {
        this.showWishlistModal = true;
        this.wishlistModalMessage = `Product added to Wishlist: ${items[items.length - 1].name}`;
      }
    });
  }

  closeWishlistModal(): void {
    this.showWishlistModal = false;
  }
}

