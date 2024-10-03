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
  budgetItems: BudgetItem[] = [
    { name: "Software", cost: 500 },
    { name: "Hardware", cost: 1000 },
    { name: "Marketing", cost: 200 }
  ];
  newItem: string = '';
  newCost: number = 0;

  addItem() {
    const newItem: BudgetItem = { name: this.newItem, cost: this.newCost };
    this.budgetItems.push(newItem);
    this.newItem = '';
    this.newCost = 0;
  }

  deleteItem(index: number) {
    this.budgetItems.splice(index, 1);
  }

  getTotalCost(): number {
    return this.budgetItems.reduce((total, item) => total + item.cost, 0);
  }
}
