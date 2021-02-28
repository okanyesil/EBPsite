import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    AngularFireAuthModule,
    MatSnackBarModule,
    NgbDropdownModule
  ]
})
export class NavbarModule { }
