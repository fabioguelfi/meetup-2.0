import { Injectable } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';

@Injectable()
export class OrderService {

  constructor(private shoppingCartService: ShoppingCartService) { }

  public cartItems(): CartItem[] {
    return this.shoppingCartService.items;
  }

  public increaseQty(item: CartItem): void {
    this.shoppingCartService.increaseQty(item);
  }

  public decreaseQty(item: CartItem): void {
    this.shoppingCartService.decreaseQty(item);
  }

  public remove(item: CartItem): void {
    this.shoppingCartService.remove(item);
  }

}
