import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { IBookModel } from '../models/book.model';



@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) { }

  getShoppingCart():Observable<IBookModel[]>{
    return this.auth.user.pipe(
      take(1),
      switchMap((user)=>{
        return this.firestore.collection<IBookModel>('shoppingCart',(ref)=>
          ref.where('userId','==',user.uid)).valueChanges().pipe(
            filter(v=>!!v)
          )
      })
    )
  }

  getDocID(userId,bookName){
 
    return this.firestore.collection("shoppingCart").get().pipe(
      map((querySnapshot)=>{
        let docID:string = "";
        let book:string;
        let uid:string;
        let data;
        querySnapshot.forEach(function(doc){
          data = doc.data()
          book=data.bookName;
          uid=data.userId;
          if(uid == userId && book===bookName){
            //console.log("**docID:",doc.id)
            docID = doc.id 
            
          }
        })
        return docID
      }
      )
    )  
  }
      
  updateCount(bookName,count){

     this.auth.user.pipe(
      take(1),
      switchMap((user)=>{
        return this.getDocID(user.uid,bookName)
      })
    ).subscribe(
      docID=>{
        //console.log("documentID:",docID)
        this.firestore.collection('shoppingCart').doc(docID)
        .update({count:count}).then()
      }
    )

  }

  deleteDocFromShoppingCart(bookName:string){
    this.auth.user.pipe(
      take(1),
      switchMap((user)=>{
        return this.getDocID(user.uid,bookName)
      })
    ).subscribe(
      docID=>{
        //console.log("documentID:",docID)
        this.firestore.collection('shoppingCart').doc(docID).delete().then()
        
      }
    )
  }



  
}
