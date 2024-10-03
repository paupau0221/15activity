import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
  menuItem: string[] = ["Pizza", "Sushi", "Tacos", "Paella"];
  newItem: string = '';

  addMenuItem() {
    this.menuItem.push(this.newItem);
    this.newItem = ''; // Clear the input field
  }

  deleteMenuItem(index: number) {
    this.menuItem.splice(index, 1);
  }
}
