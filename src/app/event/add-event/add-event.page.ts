import { NavController } from '@ionic/angular';
import { TestAuthService } from './../../services/test-auth.service';
import { Evenement } from './../../models/evenement.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit {

  description : string = ''
  date : string = ''
  lieu : string = ''
  email : string = ''
  textSuccess = ''
  constructor(private testAuth: TestAuthService, private authService: AuthService, private navCtrl:NavController) { }

  ngOnInit() {
    const credential = this.authService.getUserCredential()
    this.email = credential.user.email
  }

  addNewEvent() {
    if(this.description && this.date && this.lieu && this.email ){
      console.log('enregistrer')
      const evenement : Evenement = {
        date: this.date,
        description: this.description,
        lieu: this.lieu,
        email: this.email,
        inscrit: []
      }
      this.testAuth.addEvent(evenement).then(() => this.textSuccess = 'evenement ajouté')
    }
  }

  returnEvent() {
    this.navCtrl.navigateRoot('event')
  }

}
