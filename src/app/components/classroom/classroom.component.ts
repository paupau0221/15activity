import { Component } from '@angular/core';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrl: './classroom.component.css'
})
export class ClassroomComponent {
  studentLis: string[] = ["Teresita", "Minda", "Enrico", "April"];
  newStudent: string = '';

  addStudent() {
    this.studentLis.push(this.newStudent);
    this.newStudent = ''; // Clear the input field
  }

  deleteStudent(index: number) {
    this.studentLis.splice(index, 1);
  }
}
