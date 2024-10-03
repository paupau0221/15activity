import { Component } from '@angular/core';

interface Meal {
  name: string;
  day: string;
}
@Component({
  selector: 'app-mealplan',
  templateUrl: './mealplan.component.html',
  styleUrl: './mealplan.component.css'
})
export class MealplanComponent {
  mealPlan: Meal[] = [
    { name: "Breakfast Burrito", day: "Monday" },
    { name: "Chicken Salad", day: "Tuesday" },
    { name: "Pasta with Veggies", day: "Wednesday" }
  ];
  newMeal: string = '';
  newDay: string = '';
  days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  addMeal() {
    const newMeal: Meal = { name: this.newMeal, day: this.newDay };
    this.mealPlan.push(newMeal);
    this.newMeal = '';
    this.newDay = '';
  }

  deleteMeal(index: number) {
    this.mealPlan.splice(index, 1);
  }
}
