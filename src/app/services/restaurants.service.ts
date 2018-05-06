import { Injectable } from '@angular/core';
import { Restaurant } from './../restaurants/restaurant/restaurant.model';

@Injectable()
export class RestaurantsService {

  rests: Restaurant[] = [
    {
      id: 'bread-bakery',
      name: 'Bread & Bakery',
      category: 'Bakery',
      deliveryEstimate: '25m',
      rating: 4.9,
      imagePath: 'assets/img/restaurants/breadbakery.png',
    },
    {
      id: 'burger-house',
      name: 'Burger House',
      category: 'Hamburgers',
      deliveryEstimate: '100m',
      rating: 3.5,
      imagePath: 'assets/img/restaurants/burgerhouse.png',
    },
  ];

  constructor() { }

  public restautans(): Restaurant[] {
    return this.rests;
  }

}