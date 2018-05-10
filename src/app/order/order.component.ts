import { Component, OnInit } from '@angular/core';
import { OrderService } from './../services/order.service';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public orderForm: FormGroup;

  public delivery = 8;

  public paymentOptions = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão Refeição', value: 'REF' },
  ];

  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      emailConfirmation: this.formBuilder.control(''),
      address: this.formBuilder.control(''),
      number: this.formBuilder.control(''),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control(''),
    })
  }

  public itemsValue(): number {
    return this.orderService.itemsValue();
  }

  public cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  public increaseQty(item: CartItem): void {
    this.orderService.increaseQty(item);
  }

  public decreaseQty(item: CartItem): void {
    this.orderService.decreaseQty(item);
  }

  public remove(item: CartItem): void {
    this.orderService.remove(item);
  }

  public checkOrder(order: Order): void {
    order.orderItems = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));

    this.orderService.checkOrder(order)
      .subscribe((orderId: string) => {
        this.orderService.clear();
        this.router.navigate(['/order-summary'])
      });
  }

}
