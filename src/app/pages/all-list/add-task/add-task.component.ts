import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  // disableSelect = new FormControl(false);
  addForm!: FormGroup;
  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.reactiveFormFunction()
    console.log("my dta ===>", this.addForm.value)
  }

  reactiveFormFunction(){
    this.addForm = this.formBuilder.group({
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
    console.log(this.addForm.value);
  }


}
