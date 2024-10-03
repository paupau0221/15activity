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
  artistLis: Artist[] = [
    { name: "Luna Skye" },
    { name: "Jaxon Wilde" }
  ];
  newArtist: string = '';

  addArtist() {
    const newArtist: Artist = { name: this.newArtist };
    this.artistLis.push(newArtist);
    this.newArtist = '';
  }

  deleteArtist(index: number) {
    this.artistLis.splice(index, 1);
  }
}
