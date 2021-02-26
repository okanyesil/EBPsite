import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { BasketContainerComponent } from './container/basket-container/basket-container.component';
import { AddAddressComponent } from './contents/add-address/add-address.component';
import { AddressComponent } from './contents/address/address.component';
import { BasketInfoComponent } from './contents/basket-info/basket-info.component';
import { MyBasketComponent } from './contents/my-basket/my-basket.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {MatDialogModule} from "@angular/material/dialog";
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { PaymentComponent } from './contents/payment/payment.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    BasketContainerComponent, 
    AddAddressComponent, 
    AddressComponent,
    BasketInfoComponent,
    MyBasketComponent,
    PaymentComponent
    ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,    
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,

    MatAutocompleteModule,
    FormsModule,
    MatDialogModule,
    MatTabsModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ],
  entryComponents: [AddAddressComponent]
})
export class ShoppingCartModule { }
