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
  appList: App[] = [
    { name: "Instagram" },
    { name: "WhatsApp" },
    { name: "YouTube" }
  ];
  newApp: string = '';

  addApp() {
    const newApp: App = { name: this.newApp };
    this.appList.push(newApp);
    this.newApp = '';
  }

  deleteApp(index: number) {
    this.appList.splice(index, 1);
  }
}
