import { Component } from '@angular/core';
interface Lecture {
  topic: string;
  date: Date;
}
@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrl: './lecture.component.css'
})
export class LectureComponent {
  lectureLis: Lecture[] = [
    { topic: "Introduction to Programming", date: new Date('2024-01-15') },
    { topic: "Data Structures", date: new Date('2024-01-22') }
  ];
  newLecture: string = '';

  addLecture() {
    const newLecture: Lecture = { topic: this.newLecture, date: new Date() };
    this.lectureLis.push(newLecture);
    this.newLecture = '';
  }

  deleteLecture(index: number) {
    this.lectureLis.splice(index, 1);
  }
}
