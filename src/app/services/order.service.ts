import { Injectable } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { Order } from '../order/order.model';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { MEAT_API } from './../api';

@Injectable()
export class OrderService {

  constructor(
    private http: Http,
    private shoppingCartService: ShoppingCartService) { }

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

  public itemsValue(): any {
    return this.shoppingCartService.total();
  }

  public checkOrder(order: Order): Observable<string> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({ headers: headers }))
      .map(response => response.json());
  }

  public clear(): void {
    this.shoppingCartService.clear();
  }

}
