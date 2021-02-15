import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {BookService} from '../../services/book.service';
import {IBookModel} from '../../models/book.model';
import {Observable} from 'rxjs';
import { EbpService } from '../../services/ebp.service';
import { BookBestSellerService } from '../../services/book-best-seller.service';
@Component({
  selector: 'app-main-page-container',
  templateUrl: './main-page-container.component.html',
  styleUrls: ['./main-page-container.component.scss']
})
export class MainPageContainerComponent implements OnInit {
  bookInfo$: Observable<IBookModel[]>;
  ebpInfo$:Observable<IBookModel[]>;
  bestInfo$:Observable<IBookModel[]>;

  customOptions: OwlOptions  = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  constructor(private bookService: BookService,private ebpSecilen:EbpService,private bookBest: BookBestSellerService) { }

  ngOnInit(): void {
    this.bookInfo$ = this.bookService.getBooks();
    this.ebpInfo$=this.ebpSecilen.getBooks();
    this.bestInfo$=this.bookBest.getBooks();
  }

}
