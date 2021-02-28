import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ShoppingCartService } from 'src/libs/modules/shared/services/shopping-cart.service';
import { AddAddressComponent } from '../add-address/add-address.component';
import { IAddress } from './address.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  addressForm:IAddress;



constructor(private addressService:ShoppingCartService,private getBookService:ShoppingCartService,public dialog: MatDialog){
  this.address.next(false)
}
subscriptions= new Subscription();

  @Output()
  address = new EventEmitter<boolean>();





  ngOnInit(): void {
    this.getAddresInfo();

  }

  addressInfo(address:boolean){
    this.address.emit(address);

  }

  addAddress(){
    this.openDialog();
    this.addressInfo(false);
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=false;
    let dialogRef = this.dialog.open(AddAddressComponent,dialogConfig)
    this.subscriptions.add(
      dialogRef.afterClosed().pipe(
        filter(value=>!!value)
      ).subscribe((formValue)=>{
        this.addressForm = formValue
        this.getAddresInfo()
      })
    )
  }
  getAddresInfo(){
    this.subscriptions.add(
      this.addressService.getAddres().subscribe(userData=>{
        let myAddress:IAddress = userData.data()["address"]
        this.addressForm = myAddress
        // console.log("form:",this.addressForm);
        if(myAddress){
          this.addressInfo(true)
        }
      })
    )
  }

}
