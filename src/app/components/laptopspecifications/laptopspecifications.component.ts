import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
interface LaptopSpec {
  model: string;
  processor: string;
  ram: number;
  storage: number;
  screenSize: number;
}

@Component({
  selector: 'app-laptopspecifications',
  templateUrl: './laptopspecifications.component.html',
  styleUrl: './laptopspecifications.component.css'
})
export class LaptopspecificationsComponent {
  laptopSpecsLis: LaptopSpec[] = [
    { model: "MacBook Pro 16", processor: "Apple M2 Pro", ram: 16, storage: 512, screenSize: 16.2 },
    { model: "Dell XPS 13", processor: "Intel Core i7-1360P", ram: 16, storage: 512, screenSize: 13.4 },
    { model: "Lenovo ThinkPad X1 Carbon", processor: "Intel Core i7-1360P", ram: 16, storage: 512, screenSize: 14 }
  ];
  newModel: string = '';
  newProcessor: string = '';
  newRam: number = 0;
  newStorage: number = 0;
  newScreenSize: number = 0;

  addLaptop() {
    const newLaptop: LaptopSpec = {
      model: this.newModel,
      processor: this.newProcessor,
      ram: this.newRam,
      storage: this.newStorage,
      screenSize: this.newScreenSize
    };
    this.laptopSpecsLis.push(newLaptop);
    this.newModel = '';
    this.newProcessor = '';
    this.newRam = 0;
    this.newStorage = 0;
    this.newScreenSize = 0;
  }

  deleteLaptop(index: number) {
    this.laptopSpecsLis.splice(index, 1);
  }
}
