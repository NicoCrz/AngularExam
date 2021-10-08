import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsTableComponent } from './restaurant/components/restaurants-table/restaurants-table.component';
import { TableColorationDirective } from './shared/directives/table-coloration.directive';
import { SmartComponentComponent } from './restaurant/smart/smart-component/smart-component.component';
import { RestaurantsFormComponent } from './restaurant/components/restaurants-form/restaurants-form.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RestaurantService} from "./restaurant/services/restaurant.service";

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsTableComponent,
    TableColorationDirective,
    SmartComponentComponent,
    RestaurantsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
