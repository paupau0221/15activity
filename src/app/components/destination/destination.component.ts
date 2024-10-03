import { Component } from '@angular/core';
interface Destination {
  name: string;
}

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent {
  destinationList: Destination[] = [
    { name: "Paris" },
    { name: "Rome" },
    { name: "Tokyo" }
  ];
  newDestination: string = '';

  addDestination() {
    const newDestination: Destination = { name: this.newDestination };
    this.destinationList.push(newDestination);
    this.newDestination = '';
  }

  deleteDestination(index: number) {
    this.destinationList.splice(index, 1);
  }
}
