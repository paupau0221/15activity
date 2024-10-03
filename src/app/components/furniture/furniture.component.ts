import { Component } from '@angular/core';
interface Furniture {
  name: string;
}
@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrl: './furniture.component.css'
})
export class FurnitureComponent {
  furnitureLis: Furniture[] = [
    { name: "Sofa" },
    { name: "Dining Table" },
    { name: "Bed" }
  ];
  newFurniture: string = '';

  addFurniture() {
    const newFurniture: Furniture = { name: this.newFurniture };
    this.furnitureLis.push(newFurniture);
    this.newFurniture = '';
  }

  deleteFurniture(index: number) {
    this.furnitureLis.splice(index, 1);
  }
}
