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
  libraryLis: Library[] = [
    { name: "Library of Congress" },
    { name: "British Library" },
    { name: "Bibliothèque Nationale de France" }
  ];
  newLibrary: string = '';

  addLibrary() {
    const newLibrary: Library = { name: this.newLibrary };
    this.libraryLis.push(newLibrary);
    this.newLibrary = '';
  }

  deleteLibrary(index: number) {
    this.libraryLis.splice(index, 1);
  }
}
