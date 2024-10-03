import { Component } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {
  playlist: string[] = ["Bohemian Rhapsody", "Imagine", "Hotel California"];
  newSong: string = '';

  addSong() {
    this.playlist.push(this.newSong);
    this.newSong = ''; // Clear the input field
  }

  deleteSong(index: number) {
    this.playlist.splice(index, 1);
  }
}
