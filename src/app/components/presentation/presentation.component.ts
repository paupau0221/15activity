import { Component } from '@angular/core';

interface PresentationTopic {
  name: string;
}
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {
  topicList: PresentationTopic[] = [
    { name: "The Future of Artificial Intelligence" },
    { name: "Sustainable Living Practices" },
    { name: "The History of Music" }
  ];
  newTopic: string = '';

  addTopic() {
    const newTopic: PresentationTopic = { name: this.newTopic };
    this.topicList.push(newTopic);
    this.newTopic = '';
  }

  deleteTopic(index: number) {
    this.topicList.splice(index, 1);
  }
}
