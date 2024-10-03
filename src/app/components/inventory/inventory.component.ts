import { Component } from '@angular/core';
interface InventoryItem {
  name: string;
  quantity: number;
}
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  inventor: InventoryItem[] = [
    { name: "Shoes", quantity: 25 },
    { name: "T-Shirt", quantity: 15 },
    { name: "Pants", quantity: 12 }
  ];
  newItem: string = '';
  newQuantity: number = 0;

  addItem() {
    const newItem: InventoryItem = { name: this.newItem, quantity: this.newQuantity };
    this.inventor.push(newItem);
    this.newItem = '';
    this.newQuantity = 0;
  }

  deleteItem(index: number) {
    this.inventor.splice(index, 1);
  }
}
