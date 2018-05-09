import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from './../../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  @Input() public items: CartItem[];
  @Output() increaseQty = new EventEmitter<CartItem>();
  @Output() decreaseQty = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  public emitIncreaseQty(item: CartItem): void {
    this.increaseQty.emit(item);
  }

  public emitDecreaseQty(item: CartItem): void {
    this.decreaseQty.emit(item);
  }

  public emitRemove(item: CartItem): void {
    this.remove.emit(item);
  }

}
