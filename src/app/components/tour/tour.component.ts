import { Component } from '@angular/core';
interface TourDate {
  city: string;
  date: Date;
}

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.css'
})
export class TourComponent {
  tourDates: TourDate[] = [
    { city: "New York", date: new Date('2024-03-15') },
    { city: "Los Angeles", date: new Date('2024-03-22') },
    { city: "Chicago", date: new Date('2024-03-29') }
  ];
  newCity: string = '';
  newDate: Date = new Date();

  addTourDate() {
    const newTourDate: TourDate = { city: this.newCity, date: this.newDate };
    this.tourDates.push(newTourDate);
    this.newCity = '';
    this.newDate = new Date();
  }

  deleteTourDate(index: number) {
    this.tourDates.splice(index, 1);
  }
}
