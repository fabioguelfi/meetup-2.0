import { Injectable } from '@angular/core';
import { Restaurant } from './../restaurants/restaurant/restaurant.model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MEAT_API } from './../api';
import { ErrorHandler } from './../app.error-handler';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }

  public restautans(): Observable<Restaurant[]> {

    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError);

  }

  public restaurantByID(id: string): Observable<Restaurant> {

    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError);

  }

  public reviwsOfRestaurants(id: string): Observable<any> {

    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError);
  }

}
