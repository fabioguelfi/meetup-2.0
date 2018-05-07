import { Component, OnInit, Query } from '@angular/core';
import { RestaurantsService } from './../services/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from './../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  public queryID: string;
  public restaurant: Restaurant;

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantsService: RestaurantsService
  ) { }

  ngOnInit() {

    this.getQueryRoute();

    this.restaurantsService.restaurantByID(this.queryID)
      .subscribe(restaurant => this.restaurant = restaurant);
  };

  public getQueryRoute(): void {
    this.activatedRoute.params.subscribe(query => this.queryID = query.id);
  }

}
