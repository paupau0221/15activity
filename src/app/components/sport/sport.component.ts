import { Component } from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css'
})
export class SportComponent {
  sportsList: string[] = ["Soccer", "Basketball", "Tennis"];
  item: string = '';

  addItems() {
    this.sportsList.push(this.item);
  }

  deleteSport(index: number) {
    this.sportsList.splice(index, 1);
  }
}
