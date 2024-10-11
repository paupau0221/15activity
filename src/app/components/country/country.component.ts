import { Component } from '@angular/core';

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {
  countryLis: string[] = ["Japan", "Brazil", "South Africa"];
  item: string = '';

  addItems() {
    this.countryLis.push(this.item);
  }

  deleteCountry(index: number) {
    this.countryLis.splice(index, 1);
  }
}
