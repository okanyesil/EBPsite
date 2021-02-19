import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) { }

  getShoppingCart() {
   return this.firestore.collection('shoppingCart').valueChanges();
  }
  deleteAnItemFromShoppingCart() {
    return;
  }
  updateCountOfItemFromShoppingCart() {
    return;
  }
  addItemToShoppingCart(){
    return this.firestore.doc('sho').valueChanges();
  }
}
