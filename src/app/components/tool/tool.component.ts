import { Component } from '@angular/core';

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrl: './tool.component.css'
})
export class ToolComponent {
  toolLis: string[] = ["Screwdriver", "Wrench"];
  item: string = '';

  addItems() {
    this.toolLis.push(this.item);
  }

  deleteTool(index: number) {
    this.toolLis.splice(index, 1);
  }
}
