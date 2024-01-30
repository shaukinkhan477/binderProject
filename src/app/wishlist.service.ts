import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistItems: any[] = [];
  private wishlistSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private previousWishlistCount: number = 0;

  getWishlistItems(): Observable<any[]> {
    return this.wishlistSubject.asObservable();
  }

  addToWishlist(product: any): void {
    this.wishlistItems.push(product);
    this.wishlistSubject.next(this.wishlistItems);
  }

  removeFromWishlist(product: any): void {
    const index = this.wishlistItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.wishlistItems.splice(index, 1);
      this.wishlistSubject.next(this.wishlistItems);
    }
  }

  getPreviousWishlistCount(): number {
    return this.previousWishlistCount;
  }

  setPreviousWishlistCount(count: number): void {
    this.previousWishlistCount = count;
  }
}
