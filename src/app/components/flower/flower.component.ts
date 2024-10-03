import { Component } from '@angular/core';
interface Flower {
  name: string;
  quantity: number;
}
@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrl: './flower.component.css'
})
export class FlowerComponent {
  flowerLis: Flower[] = [
    { name: "Rose", quantity: 60 },
    { name: "Lily", quantity: 30 },
    { name: "Tulip", quantity: 25 }
  ];
  newFlower: string = '';
  newQuantity: number = 0;

  addFlower() {
    const newFlower: Flower = { name: this.newFlower, quantity: this.newQuantity };
    this.flowerLis.push(newFlower);
    this.newFlower = '';
    this.newQuantity = 0;
  }

  deleteFlower(index: number) {
    this.flowerLis.splice(index, 1);
  }
}
