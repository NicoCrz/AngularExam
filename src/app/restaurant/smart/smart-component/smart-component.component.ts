import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../modeles/restaurant";
import {RestaurantService} from "../../services/restaurant.service";

@Component({
  selector: 'app-smart-component',
  templateUrl: './smart-component.component.html',
  styleUrls: ['./smart-component.component.css']
})
export class SmartComponentComponent implements OnInit {

  public restaurants: Restaurant[] = [];

  constructor(private RestaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.loadRestaurant();
  }

  private loadRestaurant(): void {
    this.RestaurantService.getRestaurants().subscribe(value => this.restaurants = value);
  }

  public restaurantAdded(restaurant: Restaurant): void {
    this.RestaurantService.addRestaurant(restaurant);
  }

}
