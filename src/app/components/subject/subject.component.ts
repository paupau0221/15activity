import { Component } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {
  subjectLis: string[] = ["Math", "English", "Science"];
  item: string = '';

  addItems() {
    this.subjectLis.push(this.item);
  }

  deleteSubject(index: number) {
    this.subjectLis.splice(index, 1);
  }
}
