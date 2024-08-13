import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-payment-terms',
  templateUrl: './add-payment-terms.component.html',
  styleUrls: ['./add-payment-terms.component.css']
})
export class AddPaymentTermsComponent implements OnInit {

  
  paymentform!: FormGroup;
  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.reactiveFormclass()
    console.log("my dta ===>", this.paymentform.value)
  }

  reactiveFormclass(){
    this. paymentform = this.formBuilder.group({
      '10': [null, [,]],
      '1% 10 Net 30': [null, []],
      '30': [null, []],
      '2': [null, []],
    })
  }

  Datasubmit() {
    console.log(this.paymentform.value);
  }


}
























  
  




