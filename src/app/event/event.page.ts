import { AuthService } from './../services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { TestAuthService } from '../services/test-auth.service';
import { Evenement } from '../models/evenement.model';
import { ModalController, NavController } from '@ionic/angular';
import { User } from '../models/user.model';
import { ModalEventPage } from '../modal-event/modal-event.page';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  userAuth !: User
  credentials : any
  email !: string
  evenements : Evenement[] = []

  constructor(private eventService: TestAuthService, private navCtl : NavController, private authService: AuthService,
    private modalCtrl: ModalController) {

  }

  ngOnInit() {
    this.getDataEvenements()
    this.credentials = this.authService.getUserCredential()
    console.log(this.credentials.user.email)
  }

  onClick() {
    this.navCtl.navigateRoot('event/add-event')
  }

  async getDataEvenements() {
    await this.eventService.getEvents().then(
      document => {
        document.forEach((doc) => {
          const event: Evenement = {
            id: doc.id, ... doc.data(),
          }
          this.evenements.push(event)
          console.log(doc.data())
        })
      }
    )
  }

  onRead() {
    this.authService.signOut().then(() => {
      console.log('reussie')
    })
  }

  async openEvent(evenement: Evenement) {
    const modal = await this.modalCtrl.create({
      component: ModalEventPage,
      componentProps: {id: evenement.id} ,
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    modal.present()
  }

}
