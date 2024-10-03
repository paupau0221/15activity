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
  paintingList: Painting[] = [
    { title: "Mona Lisa" },
    { title: "The Starry Night" },
    { title: "Girl with a Pearl Earring" }
  ];
  newPainting: string = '';

  addPainting() {
    const newPainting: Painting = { title: this.newPainting };
    this.paintingList.push(newPainting);
    this.newPainting = '';
  }

  deletePainting(index: number) {
    this.paintingList.splice(index, 1);
  }
}
