import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firebase } from '@firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, of } from 'rxjs';
import { switchMap, startWith, tap, filter } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthService {

  //service variables

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  //// Email/Password Auth ////
  emailSignUp(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(credential => {

        //get user's uid and store in local storage
        let uid = this.getUserUid();
        //store in local storage
        this.saveUId(uid);

        let snackBarRef = this.snackBar.open('Welcome new user!', '', { duration: 2000 });
        snackBarRef.afterDismissed().subscribe(() => {
          this.router.navigate(['/track']);
        })
      })
      .catch(error => this.handleError(error));
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {

        //get user's uid and store in local storage
        let uid = this.getUserUid();
        //store in local storage
        this.saveUId(uid);

        let snackBarRef = this.snackBar.open('Welcome back!', '', { duration: 2000 });
        snackBarRef.afterDismissed().subscribe(() => {
          this.router.navigate(['/track']);
        })
      })
      .catch(error => this.handleError(error));
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const fbAuth = firebase.auth();//change to this.afAuth.auth

    return fbAuth
      .sendPasswordResetEmail(email)
      .then(() => this.snackBar.open('Password update email sent', '', { duration: 2000 }))
      .catch(error => this.handleError(error));
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);

      let snackBarRef = this.snackBar.open('You have been logged out', '', { duration: 2000 });
      snackBarRef.afterDismissed().subscribe(() => {
        this.removeUId();
        this.router.navigate(['/auth']);
      })
    });
  }

  // If error, console log and notify user
  private handleError(error: Error) {
    console.error(error);
    this.snackBar.open(error.message, 'error', { duration: 3000 });
  }

  //sets user data to firestore after successful account creation
  private updateUserData(user){
    console.log("User is: ", user);

    const userRef: any = this.afs.doc(
      `users/${user.uid}`
    );

    const data: any = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || 'nameless user',
      photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ'
    };
    return userRef.set(data);
  }

  //gets user uid for currently signed in user
  getUserUid(){
    var user = this.afAuth.auth.currentUser;

    if(user){
      //user is signed in
      //console.log("User is: ", user.uid);
      return user.uid;
    }else{
      console.log("User is not signed in");
    }
  }

  //store a user's uid in local storage
  saveUId(uid){
    //console.log("Saving uid: ", uid);

    localStorage.setItem("userUid", uid);
  }

  //clear uid stored
  removeUId(){
    localStorage.removeItem("userUid");
  }
}
