import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket-info',
  templateUrl: './basket-info.component.html',
  styleUrls: ['./basket-info.component.scss']
})
export class BasketInfoComponent implements OnInit {
  
  @Input()
  basketContent:{productCount:number,totalPrice:number}
  
  count:number = 0;
  cost:number = 0;
  shipping_fee:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //console.log("info içinde:",this.basketContent)
  }
  

}
