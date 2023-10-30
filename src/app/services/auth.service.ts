import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';

import firebase from 'firebase/compat/app';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { User } from '../models/user.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User | null | undefined> | undefined
  credential : any
  userAuth = false
  constructor(private afAuth: AngularFireAuth, private navCtrl :NavController) {

  }

  signUpWithEmailAndPassword(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password).then(
      (user) => console.log(user)
    ).catch(
      (error) => console.log(error)
    )
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password).then(
      (credential) => {
        this.credential = credential
        this.userAuth = true
      }
    ).catch((error) => alert(error))
  }

  signOut() {
    return this.afAuth.signOut().then(
      () => {
        this.userAuth = false
        this.navCtrl.navigateRoot('home')
      }
    )
  }

  getUserCredential() {
    return this.credential

  }
}
