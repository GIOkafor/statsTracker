import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewWorkoutComponent } from '../../new-workout/new-workout.component';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

//this need edits
interface Workout{
  name: string;
  exercises: string; //change this to array of exercises
}

@Component({
  selector: 'app-track-workout',
  templateUrl: './track-workout.component.html',
  styleUrls: ['./track-workout.component.scss']
})
export class TrackWorkoutComponent implements OnInit {

  //component variables
  workoutsCollection: AngularFirestoreCollection<any>;
  workouts: Observable<any[]>;

  constructor(
    public afs: AngularFirestore,
    public dialog: MatDialog,
    private authSvc: AuthService
  ) {

  }

  ngOnInit() {
    //get signed in user's uid
    let uid = this.authSvc.getUserUid();

    this.workoutsCollection = this.afs.collection('users/' + uid + '/workouts');
    this.workouts = this.workoutsCollection.valueChanges();
  }

  createNewWorkout(){
    console.log("Creating new workout");
  }

  getWorkouts(){
    console.log("Getting user workouts");
  }

}
