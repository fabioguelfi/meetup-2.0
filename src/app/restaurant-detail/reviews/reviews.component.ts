import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './../../services/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  public reviews$: Observable<any>;
  public id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantsService: RestaurantsService) { }

  ngOnInit() {

    this.activatedRoute.parent.params.subscribe(query => this.id = query.id);

    this.reviews$ = this.restaurantsService.reviwsOfRestaurants(this.id);

  }


}
