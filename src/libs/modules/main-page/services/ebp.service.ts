import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EbpSectikleriService } from '../../shared/services/ebp-sectikleri.service';
import { IBookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class EbpService {

  constructor(private ebpSecilen:EbpSectikleriService) { }

  getBooks(): Observable<IBookModel[]> {
    return this.ebpSecilen.getAllBooks();
  }
}
