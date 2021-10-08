import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SmartComponentComponent} from "./restaurant/smart/smart-component/smart-component.component";

const routes: Routes = [
  {path: "", component: SmartComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
