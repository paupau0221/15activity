import { Component } from '@angular/core';

interface TVShow {
  name: string;
}

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrl: './tvshow.component.css'
})
export class TvshowComponent {
  showList: TVShow[] = [
    { name: "Stranger Things" },
    { name: "Game of Thrones" }
  ];
  newShow: string = '';

  addShow() {
    const newShow: TVShow = { name: this.newShow };
    this.showList.push(newShow);
    this.newShow = '';
  }

  deleteShow(index: number) {
    this.showList.splice(index, 1);
  }
}
