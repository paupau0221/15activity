import { Component } from '@angular/core';

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  carModelLis: string[] = ["AeroGlide", "Urban Nomad", "EcoCruiser"];
  item: string = '';

  addItems() {
    this.carModelLis.push(this.item);
  }

  deleteCarModel(index: number) {
    this.carModelLis.splice(index, 1);
  }
}
