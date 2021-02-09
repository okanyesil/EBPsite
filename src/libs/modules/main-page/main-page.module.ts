import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageContainerComponent } from './containers/main-page-container/main-page-container.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [MainPageContainerComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    NgbCarouselModule
  ]
})
export class MainPageModule { }
