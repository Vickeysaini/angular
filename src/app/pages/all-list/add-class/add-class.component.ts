import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {
  addclassForm!: FormGroup;
  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.reactiveFormclass()
  }

  reactiveFormclass(){
    this.addclassForm = this.formBuilder.group({
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
    console.log(this.addclassForm.value);
  }
  

}







  
  



