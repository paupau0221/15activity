import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
interface StationeryItem {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-stationery',
  templateUrl: './stationery.component.html',
  styleUrl: './stationery.component.css'
})
export class StationeryComponent {
  stationeryList: StationeryItem[] = [
    { name: "Pens", quantity: 50 },
    { name: "Paper", quantity: 100 },
    { name: "Staplers", quantity: 10 }
  ];
  newItem: string = '';
  newQuantity: number = 0;

  addItem() {
    const newItem: StationeryItem = { name: this.newItem, quantity: this.newQuantity };
    this.stationeryList.push(newItem);
    this.newItem = '';
    this.newQuantity = 0;
  }

  deleteItem(index: number) {
    this.stationeryList.splice(index, 1);
  }
}
