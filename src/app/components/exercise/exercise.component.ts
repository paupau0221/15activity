import { Component } from '@angular/core';

interface Exercise {
  name: string;
  sets: number;
  reps: number;
}
@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent {
  exerciseList: Exercise[] = [
    { name: "Push-ups", sets: 3, reps: 10 },
    { name: "Squats", sets: 3, reps: 12 },
    { name: "Pull-ups", sets: 3, reps: 8 }
  ];
  newExercise: string = '';
  newSets: number = 0;
  newReps: number = 0;

  addExercise() {
    const newExercise: Exercise = { name: this.newExercise, sets: this.newSets, reps: this.newReps };
    this.exerciseList.push(newExercise);
    this.newExercise = '';
    this.newSets = 0;
    this.newReps = 0;
  }

  deleteExercise(index: number) {
    this.exerciseList.splice(index, 1);
  }
}
