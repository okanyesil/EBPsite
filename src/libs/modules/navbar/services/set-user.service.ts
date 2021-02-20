import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SetUserService {

  constructor(private db: AngularFirestore) { }

  setUserInfo() {
    return this.db.collection('userProfile').valueChanges();
  }

}
