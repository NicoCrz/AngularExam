import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from "../../modeles/restaurant";

@Component({
  selector: 'app-restaurants-table',
  templateUrl: './restaurants-table.component.html',
  styleUrls: ['./restaurants-table.component.css']
})
export class RestaurantsTableComponent implements OnInit {

  //je ne comprends pas pourquoi il récupère pas la table de mockoon..
  @Input() restaurants: Restaurant[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
