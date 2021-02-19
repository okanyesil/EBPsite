import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { IBookModel } from '../../main-page/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class EbpSectikleriService {

  constructor(private firestore: AngularFirestore) { }

  getAllBooks(){

    return this.firestore.collection<IBookModel>('ebpnin_sectikleri').valueChanges();
  }
}
