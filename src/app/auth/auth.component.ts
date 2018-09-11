import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  //component variables
  authMode: any = 'login';

  constructor(
    public afAuth: AngularFireAuth,
    public authSvc: AuthService
  ) { }

  ngOnInit() {
  }

  emailSignUp(email: any, password: any){
    console.log("Signing up with email: ", email.email, " password: ", email.password);
    this.authSvc.emailSignUp(email.email, email.password);
  }

  emailLogin(email: any, password: any){
    console.log("Logging in with email: ", email);
    this.authSvc.emailLogin(email.email, email.password);
  }

}
