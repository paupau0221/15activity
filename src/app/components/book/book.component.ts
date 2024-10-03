import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  bookLis: string[] = ["Bayan ng Sining", "Tides of Change: Chronicles of the Archipelago", "Whispers of the Mangroves"];
  item: string = '';

  addItems() {
    this.bookLis.push(this.item);
  }

  deleteBook(index: number) {
    this.bookLis.splice(index, 1);
  }
}
