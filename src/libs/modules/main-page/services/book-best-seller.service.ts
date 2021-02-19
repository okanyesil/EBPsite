import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BestSellerService } from '../../shared/services/best-seller.service';
import { IBookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookBestSellerService {

  constructor(private bookBest: BestSellerService) { }

  getBooks(): Observable<IBookModel[]> {
    return this.bookBest.getAllBooks();
  }
}
