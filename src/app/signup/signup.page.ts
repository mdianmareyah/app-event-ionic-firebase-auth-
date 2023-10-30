import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email: any
  password: any
  constructor(private authService: AuthService, private navCrtl: NavController) { }

  ngOnInit() {
  }

  onClickSignUp() {
     if(this.email && this.password){
      this.authService.signUpWithEmailAndPassword(this.email, this.password).then(
        (user) => this.navCrtl.navigateRoot('home')
      ).then(
        (error) => console.log(error)
      )
     }
  }

}
