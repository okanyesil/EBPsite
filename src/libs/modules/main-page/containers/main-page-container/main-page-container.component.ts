import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-main-page-container',
  templateUrl: './main-page-container.component.html',
  styleUrls: ['./main-page-container.component.scss']
})
export class MainPageContainerComponent implements OnInit {


  customOptions:OwlOptions  = {
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
  }

  constructor() { }

  ngOnInit(): void {
  }

}
