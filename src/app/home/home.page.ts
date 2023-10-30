import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { TestAuthService } from '../services/test-auth.service';
import { Evenement } from '../models/evenement.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email : any
  password : any
  constructor(private authService: AuthService, private navCtrl: NavController, private testService: TestAuthService) {

  }

  onClick() {
    if(this.email && this.password){
      this.authService.signInWithEmailAndPassword(this.email, this.password).then(
        () => {
          this.navCtrl.navigateRoot('event')
        }
      ).catch(() => console.error('erreur de connexion'))
    }
  }

  onClickSignUp() {
    this.navCtrl.navigateRoot('signup');
  }




}
