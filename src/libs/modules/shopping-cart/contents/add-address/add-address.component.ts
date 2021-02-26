import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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
  
  constructor(private fb:FormBuilder){}
  
  // constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any, public dialogRef:MatDialogRef<AddAddressComponent>) { }

  ngOnInit(): void {
    this.filteredOptions = this.addressForm.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
