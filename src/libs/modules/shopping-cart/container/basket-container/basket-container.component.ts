import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-basket-container',
  templateUrl: './basket-container.component.html',
  styleUrls: ['./basket-container.component.scss']
})
export class BasketContainerComponent implements OnInit {

  
  // hediye:string="gift"
  address:boolean=false;
  basketInfo:{productCount:number,totalPrice:number} = {productCount:0 , totalPrice:0};


  isLinear = false;
 
  isEditable = false;

  constructor(private router:Router) {}

  ngOnInit() { }


  isAddress(address:boolean){
    this.address=address;
  }
  getBasketInfo(value:{productCount:number,totalPrice:number}){
    this.basketInfo=value
    //console.log("containere gelen value: ",value)
  }

  keepShopping(){
    this.router.navigate(["mainPage"])
  }


}
