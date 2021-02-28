import {Component, Input, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {catchError, map, mergeMap, switchMap, take} from 'rxjs/operators';
import {IBookModel} from '../../models/book.model';
import {DomSanitizer} from '@angular/platform-browser';
import {AngularFireStorage} from '@angular/fire/storage';
import {ShoppingCartDbService} from '../../services/shopping-cart-db.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AngularFireAuth} from '@angular/fire/auth';
import {from} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-yeni-kitap',
  templateUrl: './yeni-kitap.component.html',
  styleUrls: ['./yeni-kitap.component.scss']
})
export class YeniKitapComponent implements OnInit {
  @Input()
  bookInfo: IBookModel;
  discountPercentega: number;
  constructor(private db: ShoppingCartDbService,
              private snackBar: MatSnackBar,
              private auth: AngularFireAuth,
              private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.discountPercentega = Math.ceil((this.bookInfo.price * 100) / this.bookInfo.oldPrice);
  }
  addToCart(bilgi) {
    this.auth.user.pipe(
      take(1),
      switchMap((user) => {
        return from(this.firestore.collection('shoppingCart').add({...bilgi,count:1, userId: user.uid}));
      }),
      catchError((err) => {
        const user = localStorage.getItem('user');
        if (user === 'null') {
          this.snackBar.open('Kitap Eklemek için lütfen giriş yapın', null, {duration: 2000});
        } else {
          this.snackBar.open('Beklenmedik bir hata oluştu', null, {duration: 2000});

        }
        return err;
      })
    ).subscribe(() => {
      this.snackBar.open('Ürün Başarıyla sepete eklendi', null, { duration: 2000});
    });
  }

}
