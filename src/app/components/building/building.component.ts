import { Component } from '@angular/core';
interface Building {
  name: string;
}
@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrl: './building.component.css'
})
export class BuildingComponent {
  buildingList: Building[] = [
    { name: "Skyview Plaza" },
    { name: "Harmony Hall" },
    { name: "Echo Bridge" }
  ];
  newBuilding: string = '';

  addBuilding() {
    const newBuilding: Building = { name: this.newBuilding };
    this.buildingList.push(newBuilding);
    this.newBuilding = '';
  }

  deleteBuilding(index: number) {
    this.buildingList.splice(index, 1);
  }
}
