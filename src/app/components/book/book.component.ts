import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  bookList: string[] = ["The Lord of the Rings", "Pride and Prejudice", "To Kill a Mockingbird"];
  item: string = '';

  addItems() {
    this.bookList.push(this.item);
  }

  deleteBook(index: number) {
    this.bookList.splice(index, 1);
  }
}
