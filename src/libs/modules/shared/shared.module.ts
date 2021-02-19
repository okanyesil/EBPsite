import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {AngularFireAuthModule} from '@angular/fire/auth';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AngularFireAuthModule
  ]
})
export class SharedModule { }
