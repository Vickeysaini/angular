import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  
  vendorsForm!: FormGroup;
  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.reactiveFormclass()
    console.log("my dta ===>", this.vendorsForm.value)
  }

  reactiveFormclass(){
    this.vendorsForm = this.formBuilder.group({
      'Class': [null, [Validators.required,]],
      'type': [null, []],
      'sub': [null, []],
      'Address': [null, []],
      'line': [null, []],
      'state': [null, []],
      'code': [null, []],
    })
  }

  Datasubmit() {
    console.log(this.vendorsForm.value);
  }
}





















  
  




