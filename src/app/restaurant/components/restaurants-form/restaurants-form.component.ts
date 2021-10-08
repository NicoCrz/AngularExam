import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Restaurant} from "../../modeles/restaurant";

@Component({
  selector: 'app-restaurants-form',
  templateUrl: './restaurants-form.component.html',
  styleUrls: ['./restaurants-form.component.css']
})
export class RestaurantsFormComponent implements OnInit {


  @ViewChild("form", {static: true}) form?: NgForm;

  @Output() restaurantAdded = new EventEmitter<Restaurant>();

  public restaurant: Restaurant = {
    name: "",
    address: "",
    evaluations:0,
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  // je n'ai pas réussi à faire autrement j'ai donc mis l'évaluation avec le remplissage du restaurant
  public submit(): void {
    if (this.form && this.form.valid) {
      this.restaurantAdded.emit(this.restaurant);
      this.restaurant = {
        name: "",
        address: "",
        evaluations:0,
      }
    }
  }

}
