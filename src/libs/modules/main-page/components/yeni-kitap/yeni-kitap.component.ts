import {Component, Input, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {map, mergeMap} from 'rxjs/operators';
import {IBookModel} from '../../models/book.model';
import {DomSanitizer} from '@angular/platform-browser';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-yeni-kitap',
  templateUrl: './yeni-kitap.component.html',
  styleUrls: ['./yeni-kitap.component.scss']
})
export class YeniKitapComponent implements OnInit {
  @Input()
  bookInfo: IBookModel;
  discountPercentega: number;
  constructor() { }

  ngOnInit(): void {
    this.discountPercentega = Math.ceil((this.bookInfo.price * 100) / this.bookInfo.oldPrice);
  }

}
