import { Component } from '@angular/core';
interface Framework {
  name: string;
  type: string;
}
@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrl: './framework.component.css'
})
export class FrameworkComponent {
  frameworkList: Framework[] = [
    { name: "Angular", type: "Front-End" },
    { name: "React", type: "Front-End" },
    { name: "Vue.js", type: "Front-End" },
    { name: "Express.js", type: "Back-End" },
    { name: "Django", type: "Back-End" }
  ];
  newFramework: string = '';
  newType: string = '';
  frameworkTypes = ["Front-End", "Back-End", "Full-Stack"];

  addFramework() {
    const newFramework: Framework = { name: this.newFramework, type: this.newType };
    this.frameworkList.push(newFramework);
    this.newFramework = '';
    this.newType = '';
  }

  deleteFramework(index: number) {
    this.frameworkList.splice(index, 1);
  }
}
