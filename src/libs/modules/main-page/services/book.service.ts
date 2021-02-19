import { Injectable } from '@angular/core';
import {NewReleasedService} from '../../shared/services/new-released.service';
import {Observable} from 'rxjs';
import {IBookModel} from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private bookService: NewReleasedService ) { }

  getBooks(): Observable<IBookModel[]> {
    return this.bookService.getallBooks();
  }

}
