import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from 'src/libs/modules/shared/services/shopping-cart.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  

  @Output() 
  address = new EventEmitter<boolean>();
  
  isAddress:boolean=false

  constructor() { }
  

  ngOnInit(): void {
   
  }

  addressInfo(address:boolean){
    this.address.emit(address);
    this.isAddress = address;
  }

  addressBtnClick(){
    this.addressInfo(!this.isAddress)
  }

  addAddress(){
    console.log("addAddress calıştı")

  
     
  }


}
