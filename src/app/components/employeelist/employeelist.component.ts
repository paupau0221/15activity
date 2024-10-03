import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  employeeLis: string[] = ["employee1", "employee2"];
  item: string = '';

  addItems() {
    this.employeeLis.push(this.item);
  }

  deleteEmployee(index: number) {
    this.employeeLis.splice(index, 1);
  }
}
