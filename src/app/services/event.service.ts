import { initializeApp } from "firebase/app";
import { Injectable} from '@angular/core';
import { getFirestore, doc, setDoc, collection, query, getDocs } from 'firebase/firestore';
import { environment } from "src/environments/environment";
import { Evenement } from "../models/evenement.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  db = getFirestore(initializeApp(environment.firebase))
  event!: Event[]
  constructor() {
  }

  async add(event : Evenement) {
    await setDoc(doc(this.db, "events", "one"), event);
  }

  delete(event : Event) {

  }

  update(event: Event) {

  }

  async getData() {
    const q = query(collection(this.db, "events"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const data = doc.data() as Event
      const id = doc.id
      console.log(data);
    });
  }
}
