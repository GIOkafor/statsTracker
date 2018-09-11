import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public authSvc: AuthService){}

  signOut(){
    console.log("Signing out...");
    this.authSvc.signOut();
  }
}
