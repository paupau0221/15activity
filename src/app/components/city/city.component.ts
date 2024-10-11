import { Component } from '@angular/core';

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {
  cityLis: string[] = ["Solara Bay", "Nebula Heights", "Verdant Grove"];
  item: string = '';

  addItems() {
    this.cityLis.push(this.item);
  }

  deleteCity(index: number) {
    this.cityLis.splice(index, 1);
  }
}
