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
  lectureList: Lecture[] = [
    { topic: "Introduction to Programming", date: new Date('2024-01-15') },
    { topic: "Data Structures", date: new Date('2024-01-22') }
  ];
  newLecture: string = '';

  addLecture() {
    const newLecture: Lecture = { topic: this.newLecture, date: new Date() };
    this.lectureList.push(newLecture);
    this.newLecture = '';
  }

  deleteLecture(index: number) {
    this.lectureList.splice(index, 1);
  }
}
