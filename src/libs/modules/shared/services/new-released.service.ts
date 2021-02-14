import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IBookModel} from '../../main-page/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class NewReleasedService {

  constructor(private firestore: AngularFirestore) { }

  getallBooks() {
    return this.firestore.collection<IBookModel>('yeni_cikanlar').valueChanges();
  }
}
