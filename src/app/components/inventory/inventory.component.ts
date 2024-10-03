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
  inventory: InventoryItem[] = [
    { name: "T-Shirt", quantity: 20 },
    { name: "Jeans", quantity: 15 },
    { name: "Shoes", quantity: 10 }
  ];
  newItem: string = '';
  newQuantity: number = 0;

  addItem() {
    const newItem: InventoryItem = { name: this.newItem, quantity: this.newQuantity };
    this.inventory.push(newItem);
    this.newItem = '';
    this.newQuantity = 0;
  }

  deleteItem(index: number) {
    this.inventory.splice(index, 1);
  }
}
