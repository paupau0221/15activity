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
  flowerList: Flower[] = [
    { name: "Roses", quantity: 50 },
    { name: "Lilies", quantity: 20 },
    { name: "Hydrangeas", quantity: 15 }
  ];
  newFlower: string = '';
  newQuantity: number = 0;

  addFlower() {
    const newFlower: Flower = { name: this.newFlower, quantity: this.newQuantity };
    this.flowerList.push(newFlower);
    this.newFlower = '';
    this.newQuantity = 0;
  }

  deleteFlower(index: number) {
    this.flowerList.splice(index, 1);
  }
}
