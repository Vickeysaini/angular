import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-other-items',
  templateUrl: './other-items.component.html',
  styleUrls: ['./other-items.component.css']
})
export class OtherItemsComponent implements OnInit {

  addotheritemsForm!: FormGroup;
  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.reactiveFormclass()
    console.log("my dta ===>", this.addotheritemsForm.value)
  }

  reactiveFormclass(){
    this.addotheritemsForm = this.formBuilder.group({
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
    console.log(this.addotheritemsForm.value);
  }

}














  
  




