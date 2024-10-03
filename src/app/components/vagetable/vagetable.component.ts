import { Component } from '@angular/core';

@Component({
  selector: 'app-vagetable',
  templateUrl: './vagetable.component.html',
  styleUrl: './vagetable.component.css'
})
export class VagetableComponent {
  vegetableList: string[] = ["Carrot", "Broccoli", "Tomato"];
  item: string = '';

  addItems() {
    this.vegetableList.push(this.item);
  }

  deleteVegetable(index: number) {
    this.vegetableList.splice(index, 1);
  }
}
