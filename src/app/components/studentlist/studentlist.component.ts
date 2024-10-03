import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent {
  studentLis: string[] = ["Soler1", "Soler2"];
  item: string = '';

  addItems() {
    this.studentLis.push(this.item);
  }

  deleteStudent(index: number) {
    this.studentLis.splice(index, 1);
  }
}
