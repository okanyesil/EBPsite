import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageContainerComponent } from './containers/main-page-container/main-page-container.component';


@NgModule({
  declarations: [MainPageContainerComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
