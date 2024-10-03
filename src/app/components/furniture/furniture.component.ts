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
  furnitureList: Furniture[] = [
    { name: "Sofa" },
    { name: "Table" },
    { name: "Chair" }
  ];
  newFurniture: string = '';

  addFurniture() {
    const newFurniture: Furniture = { name: this.newFurniture };
    this.furnitureList.push(newFurniture);
    this.newFurniture = '';
  }

  deleteFurniture(index: number) {
    this.furnitureList.splice(index, 1);
  }
}
