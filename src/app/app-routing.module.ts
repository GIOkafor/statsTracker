import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TrackerComponent } from './tracker/tracker.component';
import { TrackWorkoutComponent } from './tracker/track-workout/track-workout.component';
import { TrackFoodComponent } from './tracker/track-food/track-food.component';
import { NewWorkoutComponent } from './new-workout/new-workout.component';
import { TrackSessionComponent } from './track-session/track-session.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent},
  { path: 'track', component: TrackerComponent,
    children: [
      { path: '', redirectTo: 'track-workout', pathMatch: 'full' },
      { path: 'track-workout', component: TrackWorkoutComponent },
      { path: 'new-workout', component: NewWorkoutComponent },
      { path: 'track-session/:id', component: TrackSessionComponent },
      { path: 'track-food', component: TrackFoodComponent }
    ]
  },
  { path: '', redirectTo: '/auth', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
