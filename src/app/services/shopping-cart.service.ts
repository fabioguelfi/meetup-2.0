import { Injectable } from '@angular/core';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class ShoppingCartService {

  public items: CartItem[] = [];

  constructor() { }

  public clear(): any {
    this.items = [];
  };

  public total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  };

  public addItem(item: MenuItem) {
    let foundItem = this.items.find((itemMenu) => itemMenu.menuItem.id === item.id);

    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.items.push(new CartItem(item));
    }

  };

  public removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  };

  public increaseQty(item: CartItem) {
    item.quantity = item.quantity + 1;
  }

  public decreaseQty(item: CartItem) {
    item.quantity = item.quantity - 1;
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }

  public remove(item: CartItem) {
    this.removeItem(item);
  }

}
