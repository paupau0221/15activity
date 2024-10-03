import { Component } from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrl: './tool.component.css'
})
export class ToolComponent {
  toolList: string[] = ["Hammer", "Screwdriver", "Wrench"];
  item: string = '';

  addItems() {
    this.toolList.push(this.item);
  }

  deleteTool(index: number) {
    this.toolList.splice(index, 1);
  }
}
