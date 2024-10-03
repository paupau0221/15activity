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
  exerciseLis: Exercise[] = [
    { name: "Squats", sets: 3, reps: 12 },
    { name: "Pull-ups", sets: 3, reps: 8 }
  ];
  newExercise: string = '';
  newSets: number = 0;
  newReps: number = 0;

  addExercise() {
    const newExercise: Exercise = { name: this.newExercise, sets: this.newSets, reps: this.newReps };
    this.exerciseLis.push(newExercise);
    this.newExercise = '';
    this.newSets = 0;
    this.newReps = 0;
  }

  deleteExercise(index: number) {
    this.exerciseLis.splice(index, 1);
  }
}
