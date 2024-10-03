import { Component } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {
  countryList: string[] = ["United States", "Canada", "Mexico"];
  item: string = '';

  addItems() {
    this.countryList.push(this.item);
  }

  deleteCountry(index: number) {
    this.countryList.splice(index, 1);
  }
}
