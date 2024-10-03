import { Component } from '@angular/core';
interface Artist {
  name: string;
}
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {
  artistList: Artist[] = [
    { name: "Leonardo da Vinci" },
    { name: "Vincent van Gogh" }
  ];
  newArtist: string = '';

  addArtist() {
    const newArtist: Artist = { name: this.newArtist };
    this.artistList.push(newArtist);
    this.newArtist = '';
  }

  deleteArtist(index: number) {
    this.artistList.splice(index, 1);
  }
}
