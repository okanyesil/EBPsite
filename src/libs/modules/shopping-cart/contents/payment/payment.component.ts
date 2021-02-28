import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  creditCardInfo = this.fb.group({
    cardNo:this.fb.control(null,[Validators.required]),
    cardName:this.fb.control(null,[Validators.required]),
    expirationDate:this.fb.control(null,[Validators.required]),
    securityCode:this.fb.control(null,[Validators.required]),
    Secure3D:this.fb.control(false)
  }
  )

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
