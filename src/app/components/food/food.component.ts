import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
  menuItems: string[] = ["Pizza", "Pasta", "Salad", "Burger"];
  newItem: string = '';

  addMenuItem() {
    this.menuItems.push(this.newItem);
    this.newItem = ''; // Clear the input field
  }

  deleteMenuItem(index: number) {
    this.menuItems.splice(index, 1);
  }
}
