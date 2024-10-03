import { Component } from '@angular/core';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrl: './classroom.component.css'
})
export class ClassroomComponent {
  studentList: string[] = ["Alice", "Bob", "Charlie", "David"];
  newStudent: string = '';

  addStudent() {
    this.studentList.push(this.newStudent);
    this.newStudent = ''; // Clear the input field
  }

  deleteStudent(index: number) {
    this.studentList.splice(index, 1);
  }
}
