import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  // disableSelect = new FormControl(false);
  addemployeeform!: FormGroup;
  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.reactiveFormFunction()
    console.log("my dta ===>", this.addemployeeform.value)
  }

  reactiveFormFunction(){
    this.addemployeeform = this.formBuilder.group({
      'task': [null, [Validators.required,]],
      'select': [null, []],
      'Volvo': [null, []],
      'type': [null, []],
      'Choose': [null, []],
      'Description': [null,[]],
      'Rate': [null,[]],
      'Bill': [null,[]],
      'Taxrate': [null,[]],
      
    })
  }

  Datasubmit() {
    console.log(this.addemployeeform.value);
  }



}







