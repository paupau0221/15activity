import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  movieList: string[] = ["The Shawshank Redemption", "The Godfather", "The Dark Knight"];
  item: string = '';

  addItems() {
    this.movieList.push(this.item);
  }

  deleteMovie(index: number) {
    this.movieList.splice(index, 1);
  }
}
