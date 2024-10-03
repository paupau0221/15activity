import { Component } from '@angular/core';
interface Painting {
  title: string;
}

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrl: './painting.component.css'
})
export class PaintingComponent {
  paintingLis: Painting[] = [
    { title: "Starry Night" },
    { title: "Mona Lisa" },
    { title: "The Persistence of Memory" }
  ];
  newPainting: string = '';

  addPainting() {
    const newPainting: Painting = { title: this.newPainting };
    this.paintingLis.push(newPainting);
    this.newPainting = '';
  }

  deletePainting(index: number) {
    this.paintingLis.splice(index, 1);
  }
}
