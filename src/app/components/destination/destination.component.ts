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
  destinationLis: Destination[] = [
    { name: "Paris" },
    { name: "Kyoto" },
    { name: "Cape Town" }
  ];
  newDestination: string = '';

  addDestination() {
    const newDestination: Destination = { name: this.newDestination };
    this.destinationLis.push(newDestination);
    this.newDestination = '';
  }

  deleteDestination(index: number) {
    this.destinationLis.splice(index, 1);
  }
}
