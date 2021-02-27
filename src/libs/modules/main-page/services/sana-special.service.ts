import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SanaOzelService } from '../../shared/services/sana-ozel.service';
import { IBookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class SanaSpecialService {

  constructor(private sana:SanaOzelService) { }

   getBooks(): Observable<IBookModel[]> {
    return this.sana.getallBooks();
  }
}
