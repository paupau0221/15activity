import { Component } from '@angular/core';
interface Event {
  name: string;
  date: Date;
}
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  eventLis: Event[] = [
    { name: "Tech Conference", date: new Date('2024-09-20') },
    { name: "Art Exhibition", date: new Date('2024-11-05') }
  ];
  newEvent: string = '';
  newDate: Date = new Date();

  addEvent() {
    const newEvent: Event = { name: this.newEvent, date: this.newDate };
    this.eventLis.push(newEvent);
    this.newEvent = '';
    this.newDate = new Date();
  }

  deleteEvent(index: number) {
    this.eventLis.splice(index, 1);
  }
}
