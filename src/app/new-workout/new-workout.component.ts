import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { tap, first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.component.html',
  styleUrls: ['./new-workout.component.scss']
})
export class NewWorkoutComponent implements OnInit {

  workoutForm: FormGroup;

  //form state
  loading = false;
  success = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private authSvc: AuthService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.workoutForm = this.fb.group({
      workoutName: ['', [
        Validators.required
      ]],
      exercises: this.fb.array([])
    })
  }

  async submitHandler(){
    //show spinner
    this.loading = true;
    //get form contents
    const formValue = this.workoutForm.value;

    //get signed in user's uid
    let uid = this.authSvc.getUserUid();

    try{
      //autogenerate id for entry
      //await this.afs.collection('users/' + uid + '/workouts').add(formValue);

      // id  is specified as 'workout-name'
      await this.afs.doc('users/' + uid + '/workouts/' + formValue.workoutName).set(formValue);
      this.success = true;

      //show success snackbar
      let snackRef = this.snackBar.open('Succesfully created workout', '', {duration: 2000});
      snackRef.afterDismissed().subscribe(() => {

        //redirect user to session tracking screen
        //this.router.redirect('/track/workout-id/session-id')
      })
      //redirect to workouts view
    }catch(err){
      console.log(err);
    }

    this.loading = false;
  }

  //not entirely sure why i included this but tut said its a good idea
  // oh it makes adding new exercises dynamically to list a lot cleaner
  get exercisesForms(){
    return this.workoutForm.get('exercises') as FormArray;
  }

  //add a single exercise to workout getExercisesForms
  addExercise(){
    const exercise = this.fb.group({
      exerciseName: ['', [
        Validators.required
      ]],
      numberOfSets: [, [
        Validators.required,
        Validators.min(1)
      ]],
      numberOfReps: [, [
        Validators.required
      ]]
    });

    this.exercisesForms.push(exercise);
  }

  //remove exercise
  deleteExercise(i){
    this.exercisesForms.removeAt(i);
  }
}
