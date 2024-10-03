import { Component } from '@angular/core';
interface BudgetItem {
  name: string;
  cost: number;
}
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent {
  budgetItem: BudgetItem[] = [
    { name: "Software", cost: 600 },
    { name: "Hardware", cost: 1200 },
    { name: "Marketing", cost: 500 }
  ];
  newItem: string = '';
  newCost: number = 0;

  addItem() {
    const newItem: BudgetItem = { name: this.newItem, cost: this.newCost };
    this.budgetItem.push(newItem);
    this.newItem = '';
    this.newCost = 0;
  }

  deleteItem(index: number) {
    this.budgetItem.splice(index, 1);
  }

  getTotalCost(): number {
    return this.budgetItem.reduce((total, item) => total + item.cost, 0);
  }
}
