import { Component } from '@angular/core';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrl: './software.component.css'
})
export class SoftwareComponent {
  softwar: string[] = [ "software1"];
  item: string = '';

  addItems() {
    this.softwar.push(this.item);
  }

  deleteGame(index: number) {
    this.softwar.splice(index, 1);
  }
}
