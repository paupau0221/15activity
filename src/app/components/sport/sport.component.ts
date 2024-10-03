import { Component } from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css'
})
export class SportComponent {
  sportsLis: string[] = ["Soccer", "Basketball", "Tennis"];
  item: string = '';

  addItems() {
    this.sportsLis.push(this.item);
  }

  deleteSport(index: number) {
    this.sportsLis.splice(index, 1);
  }
}
