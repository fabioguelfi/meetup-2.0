import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './../../services/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from './../menu-item/menu-item.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menu: Observable<MenuItem[]>;

  constructor(
    private restaurantsService: RestaurantsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = this.restaurantsService.menuOfRetaurant(this.activatedRoute.parent.snapshot.params['id']);
  }

  public addMenuItem(item: MenuItem): void {
    console.log(item);
  }

}
