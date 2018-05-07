import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../../services/shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private shoppingCartService: ShoppingCartService,
  ) { }

  ngOnInit() {
  }

  public items(): any {
    return this.shoppingCartService.items;
  }

  public total(): number {
    return this.shoppingCartService.total();
  }

  public clear(): void {
    this.shoppingCartService.clear();
  }

  public removeItem(item: any): void {
    this.shoppingCartService.removeItem(item);
  }

  public addItem(item: any): void {
    this.shoppingCartService.addItem(item);
  }

}
