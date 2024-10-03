import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  gameLis: string[] = ["Mobile Legends", "Minecraft", "Candy Crush"];
  item: string = '';

  addItems() {
    this.gameLis.push(this.item);
  }

  deleteGame(index: number) {
    this.gameLis.splice(index, 1);
  }
}
