import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {
  groceryLis: string[] = ["Tissue", "Shampoo", "Soap", "Bread"];
  newItem: string = '';

  addItem() {
    this.groceryLis.push(this.newItem);
    this.newItem = ''; // Clear the input field
  }

  deleteItem(index: number) {
    this.groceryLis.splice(index, 1);
  }
}
