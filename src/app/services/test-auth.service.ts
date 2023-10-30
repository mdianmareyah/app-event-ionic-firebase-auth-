import { Injectable, inject } from '@angular/core';
import { Firestore ,collectionData, docData, collection, addDoc, doc, query, getDocs, QuerySnapshot, DocumentData, getDoc, updateDoc  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Evenement } from '../models/evenement.model';

@Injectable({
  providedIn: 'root'
})
export class TestAuthService {


  private firestore = inject(Firestore)
  private evenements$ : Observable<Evenement[]>;

  constructor() {
    const eventRef = collection(this.firestore,'events');
    this.evenements$ = collectionData(eventRef) as Observable<Evenement[]>;
  }

  async getEvents(): Promise<QuerySnapshot<DocumentData>>  {
    const eventRef = collection(this.firestore,'events');
    const querySnapshot = await getDocs(eventRef)
    return querySnapshot
    //const q = query(eventRef)
    //return collectionData(q) as Observable<Evenement[]>;
  }

  async getEventById(id: string | undefined) {
    const eventRef = doc(this.firestore, 'events/' + id);
    const querySnapshot = await getDoc(eventRef)
    return querySnapshot
  }

  addEvent(event: Evenement) {
    const eventsRef = collection(this.firestore,'events')
    return addDoc(eventsRef, event)
  }

  updateEvent(event: Evenement) {
    const eventsRef = doc(this.firestore, 'events/' + event.id)
    return updateDoc(eventsRef, {lieu: event.lieu, description: event.description, date: event.date, inscrit: event.inscrit, email: event.email})
  }

  getEvenement(): Observable<Evenement[]> {
    return this.evenements$;

  }
}
