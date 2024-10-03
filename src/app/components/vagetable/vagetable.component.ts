import { Component } from '@angular/core';

@Component({
  selector: 'app-vagetable',
  templateUrl: './vagetable.component.html',
  styleUrl: './vagetable.component.css'
})
export class VagetableComponent {
  vegetableLis: string[] = ["Carrot", "Spinach", "Tomato"];
  item: string = '';

  addItems() {
    this.vegetableLis.push(this.item);
  }

  deleteVegetable(index: number) {
    this.vegetableLis.splice(index, 1);
  }
}
