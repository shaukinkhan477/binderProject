import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private cartCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private cartTotalSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  getCartItems(): Observable<any[]> {
    return this.cartSubject.asObservable();
  }

  getCartCount(): Observable<number> {
    return this.cartCountSubject.asObservable();
  }

  getCartTotal(): Observable<number> {
    return this.cartTotalSubject.asObservable();
  }

  addToCart(product: any): void {
    this.cartItems.push(product);
    this.cartSubject.next(this.cartItems);

    // Update cart count
    this.cartCountSubject.next(this.cartItems.length);

  }

  removeFromCart(product: any): void {
    const index = this.cartItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartSubject.next(this.cartItems);
      this.cartCountSubject.next(this.cartItems.length);
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
    this.cartCountSubject.next(0);
  }
}
