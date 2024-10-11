import { Component } from '@angular/core';

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-laguage',
  templateUrl: './laguage.component.html',
  styleUrl: './laguage.component.css'
})
export class LaguageComponent {
  languageLis: string[] = ["English", "Spanish", "Mandarin Chinese"];
  item: string = '';

  addItems() {
    this.languageLis.push(this.item);
  }

  deleteLanguage(index: number) {
    this.languageLis.splice(index, 1);
  }
}
