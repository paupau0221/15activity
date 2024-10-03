import { Component } from '@angular/core';
interface Library {
  name: string;
}
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {
  libraryList: Library[] = [
    { name: "lodash" },
    { name: "moment.js" },
    { name: "axios" }
  ];
  newLibrary: string = '';

  addLibrary() {
    const newLibrary: Library = { name: this.newLibrary };
    this.libraryList.push(newLibrary);
    this.newLibrary = '';
  }

  deleteLibrary(index: number) {
    this.libraryList.splice(index, 1);
  }
}
