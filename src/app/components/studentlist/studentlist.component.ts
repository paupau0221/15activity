import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent {
  studentList: string[] = ["Jerome1", "Jerome2"];
  item: string = '';

  addItems() {
    this.studentList.push(this.item);
  }

  deleteStudent(index: number) {
    this.studentList.splice(index, 1);
  }
}
