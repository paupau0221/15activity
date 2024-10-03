import { Component } from '@angular/core';
interface Accessory {
  name: string;
}
@Component({
  selector: 'app-accessory',
  templateUrl: './accessory.component.html',
  styleUrl: './accessory.component.css'
})
export class AccessoryComponent {
  accessoryLis: Accessory[] = [
    { name: "Charger" },
    { name: "Pillows" }
  ];
  newAccessory: string = '';

  addAccessory() {
    const newAccessory: Accessory = { name: this.newAccessory };
    this.accessoryLis.push(newAccessory);
    this.newAccessory = '';
  }

  deleteAccessory(index: number) {
    this.accessoryLis.splice(index, 1);
  }
}
