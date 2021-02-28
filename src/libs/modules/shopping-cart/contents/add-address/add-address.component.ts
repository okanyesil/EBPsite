import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ShoppingCartService } from 'src/libs/modules/shared/services/shopping-cart.service';


// import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {
  options: string[] = ['İstanbul', 'Adana', 'Adıyaman','One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  addressForm = this.fb.group({
    addressTitle:this.fb.control(null,[Validators.required]),
    city:this.fb.control(null,[Validators.required]),
    state:this.fb.control(null,[Validators.required]),
    address:this.fb.control(null,[Validators.required]),
    name:this.fb.control(null,[Validators.required]),
    mobilePhone:this.fb.control(null,[Validators.required]),
    homePhone:this.fb.control(null),
    billType:this.fb.control(null,[Validators.required]),
  })
  
  constructor(private smt:ShoppingCartService,private fb:FormBuilder,public dialogRef:MatDialogRef<AddAddressComponent>){
  }
  subsciptions = new Subscription
  // constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any, public dialogRef:MatDialogRef<AddAddressComponent>) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close()
  }
    save(){
      if(this.addressForm.valid){
        this.dialogRef.close(this.addressForm.value)
        this.smt.setAddress(this.addressForm.value)
       
         
  }

}
}
