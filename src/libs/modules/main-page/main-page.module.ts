import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageContainerComponent } from './containers/main-page-container/main-page-container.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {NavbarContainerComponent} from '../navbar/containers/navbar-container/navbar-container.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { YeniKitapComponent } from './components/yeni-kitap/yeni-kitap.component';

@NgModule({
    declarations: [MainPageContainerComponent, NavbarContainerComponent, BookCardComponent, YeniKitapComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    NgbCarouselModule,
    CarouselModule ,
  ]
})
export class MainPageModule { }
