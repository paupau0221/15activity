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
  showLis: TVShow[] = [
    { name: "Eat Bulaga" },
    { name: "I'ts Showtime" }
  ];
  newShow: string = '';

  addShow() {
    const newShow: TVShow = { name: this.newShow };
    this.showLis.push(newShow);
    this.newShow = '';
  }

  deleteShow(index: number) {
    this.showLis.splice(index, 1);
  }
}
