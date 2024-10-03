import { Component } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {
  cityList: string[] = ["London", "Paris", "New York"];
  item: string = '';

  addItems() {
    this.cityList.push(this.item);
  }

  deleteCity(index: number) {
    this.cityList.splice(index, 1);
  }
}
