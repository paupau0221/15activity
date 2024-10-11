import { Component } from '@angular/core';

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
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
