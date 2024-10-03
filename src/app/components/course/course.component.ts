import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  courseLis: string[] = ["COMSCI", "ACOUNTANCY", "BSIT"];
  item: string = '';

  addItems() {
    this.courseLis.push(this.item);
  }

  deleteCourse(index: number) {
    this.courseLis.splice(index, 1);
  }
}
