import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-preferences',
  templateUrl: './add-preferences.component.html',
  styleUrls: ['./add-preferences.component.css']
})
export class AddPreferencesComponent implements OnInit {

  // disableSelect = new FormControl(false);
  addpreferences!: FormGroup;
  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.reactiveFormFunction()
    console.log("my dta ===>", this.addpreferences.value)
  }

  reactiveFormFunction(){
    this.addpreferences = this.formBuilder.group({
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
    console.log(this.addpreferences.value);
  }


}







