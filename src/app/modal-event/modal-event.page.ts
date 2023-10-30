import { Component, Input, OnInit } from '@angular/core';
import { TestAuthService } from '../services/test-auth.service';
import { Evenement } from '../models/evenement.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-modal-event',
  templateUrl: './modal-event.page.html',
  styleUrls: ['./modal-event.page.scss'],
})
export class ModalEventPage implements OnInit {

  @Input() id: string | undefined

  evenement !: Evenement
  email : string = ''
  inscrit = false
  nameInscrit = 'eye'
  qr = false
  nameQr = 'eye'
  alertButtons = ['OK'];

  constructor(private eventService: TestAuthService, private authService: AuthService) { }

  ngOnInit() {
    const credentials = this.authService.getUserCredential()
    this.email = credentials.user.email
    this.eventService.getEventById(this.id).then(
      (document) => {
        this.evenement = {
          id: document.id, ... document.data()
        }
        console.log(this.evenement)
      }
    )
  }

  viewUser() {
    this.qr = false
    if (this.inscrit == true){
      this.inscrit = !this.inscrit
      this.nameInscrit = 'eye-off'
    }
    else {
      this.inscrit = !this.inscrit
      this.nameInscrit = 'eye'
    }

  }

  viewQr() {
    this.inscrit = false
    if (this.qr == true){
      this.qr = !this.qr
      this.nameQr = 'eye-off'
    }
    else {
      this.qr = !this.qr
      this.nameQr ='eye'
    }

  }

  submit() {
    const email = this.email
    this.evenement.inscrit?.push(email)
    this.eventService.updateEvent(this.evenement).then(() => console.log('inscription reussie'))
  }

}
