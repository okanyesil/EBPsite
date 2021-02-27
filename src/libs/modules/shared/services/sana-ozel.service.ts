import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IBookModel } from '../../main-page/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class SanaOzelService {

  constructor(private firestore: AngularFirestore) { }

  getallBooks() {
    return this.firestore.collection<IBookModel>('sana_ozel').valueChanges();
  }
}
