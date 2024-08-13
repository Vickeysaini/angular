import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-payment-terams',
  templateUrl: './view-payment-terams.component.html',
  styleUrls: ['./view-payment-terams.component.css']
})
export class ViewPaymentTeramsComponent implements OnInit {

  
  addpaymentform!: FormGroup;
  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.reactiveFormclass()
    console.log("my dta ===>", this.addpaymentform.value)
  }

  reactiveFormclass(){
    this. addpaymentform = this.formBuilder.group({
      '10': [null, [,]],
      '1% 10 Net 30': [null, []],
      '30': [null, []],
      '2': [null, []],
    })
  }

  Datasubmit() {
    console.log(this.addpaymentform.value);
  }

}





















  
  




