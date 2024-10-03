import { Component } from '@angular/core';

interface Composer {
  name: string;
}
@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrl: './composer.component.css'
})
export class ComposerComponent {
  composerList: Composer[] = [
    { name: "Ludwig van Beethoven" },
    { name: "Wolfgang Amadeus Mozart" },
    { name: "Johann Sebastian Bach" }
  ];
  newComposer: string = '';

  addComposer() {
    const newComposer: Composer = { name: this.newComposer };
    this.composerList.push(newComposer);
    this.newComposer = '';
  }

  deleteComposer(index: number) {
    this.composerList.splice(index, 1);
  }
}
