import { Component } from '@angular/core';
interface App {
  name: string;
}
@Component({
  selector: 'app-mobileapp',
  templateUrl: './mobileapp.component.html',
  styleUrl: './mobileapp.component.css'
})
export class MobileappComponent {
  appLis: App[] = [
    { name: "Facebook" },
    { name: "Twitter" },
    { name: "Instagram" }
  ];
  newApp: string = '';

  addApp() {
    const newApp: App = { name: this.newApp };
    this.appLis.push(newApp);
    this.newApp = '';
  }

  deleteApp(index: number) {
    this.appLis.splice(index, 1);
  }
}
