import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { IBookModel } from 'src/libs/modules/shared/models/book.model';
import { ShoppingCartService } from 'src/libs/modules/shared/services/shopping-cart.service';


@Component({
  selector: 'app-my-basket',
  templateUrl: './my-basket.component.html',
  styleUrls: ['./my-basket.component.scss']
})
export class MyBasketComponent implements OnInit {
  
  // basketInfo componentine toplam ürün ve fiyat bilgisini gönderiyor
  @Output() 
  basketInfo = new EventEmitter<{productCount:number,totalPrice:number}>();
  
  // table degişkenleri
  displayedColumns: string[] = [ 'book', 'count', 'price'];
  Books=[]

  
  subscriptions: Subscription = new Subscription();
  myBooks$ = this.getBookService.getShoppingCart()
  
  constructor(private getBookService:ShoppingCartService) {   }

  ngOnInit(): void {

    this.subscriptions.add(
      
      this.myBooks$.subscribe((v)=>{
        this.Books = v
        
        //liste değiştikçe BasketInfo güncelleniyor
        this.setBasketInfo()
      }) 
    )
  
  }

  ngAfterViewInit(){  }
  
  changeCount(bookName:string,count:number){
    
    if(count>=1){
      //console.log(count)
      this.getBookService.updateCount(bookName,count)
    } else{
      //delete document olmalı
      //console.log("else:",count)
      this.getBookService.deleteDocFromShoppingCart(bookName)
    } 
    
  }
  
  

  //basket-info componentine toplam ürün ve fiyat bilgisini hesaplar/gönderir
  // books[]'ne discountPercentage değişkenini ekler
  setBasketInfo(){   
    let productCount:number=0
    let totalPrice:number=0
    
    this.Books.forEach((value)=>{
      productCount+= value.count
      totalPrice+=value.price*value.count
      if(value.oldPrice > value.price){
        value.discountPercentage = Math.ceil(((value.oldPrice-value.price) * 100) / value.oldPrice)
      }else{
        value.discountPercentage = 0
      }

    })
    this.basketInfo.emit({productCount,totalPrice})  
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
