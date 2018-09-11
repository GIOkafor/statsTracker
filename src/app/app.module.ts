import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//angular fire modules setup
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

//material design components
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

//services
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { TrackerComponent } from './tracker/tracker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkoutHistoryComponent } from './view-records/workout-history/workout-history.component';
import { NewWorkoutComponent } from './new-workout/new-workout.component';
import { ViewRecordsComponent } from './view-records/view-records.component';
import { TrackWorkoutComponent } from './tracker/track-workout/track-workout.component';
import { TrackFoodComponent } from './tracker/track-food/track-food.component';
import { TrackSessionComponent } from './track-session/track-session.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    TrackerComponent,
    WorkoutHistoryComponent,
    NewWorkoutComponent,
    ViewRecordsComponent,
    TrackWorkoutComponent,
    TrackFoodComponent,
    TrackSessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    NgbModule.forRoot(),
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ NewWorkoutComponent ]
})
export class AppModule { }
