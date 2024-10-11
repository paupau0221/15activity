import { Component } from '@angular/core';

interface PresentationTopic {
  name: string;
}
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {
  topicLis: PresentationTopic[] = [
    { name: "Harnessing Innovation: Transforming Ideas into Impact" },
    { name: "The Science of Happiness: Unlocking the Secrets to Well-Being" },
    { name: "The History of Music" }
  ];
  newTopic: string = '';

  addTopic() {
    const newTopic: PresentationTopic = { name: this.newTopic };
    this.topicLis.push(newTopic);
    this.newTopic = '';
  }

  deleteTopic(index: number) {
    this.topicLis.splice(index, 1);
  }
}
