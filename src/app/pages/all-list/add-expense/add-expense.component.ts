import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  disableSelect = new FormControl(false);
  addexpenseForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.reactiveFormFunction()
  }

  reactiveFormFunction(){
    this.addexpenseForm = this.formBuilder.group({
      'AccountName': [null, [Validators.required,]],
      'Account': [null,[]],
      'state': [null,[]],
      'No': [null,[]],
      'Limit': [null,[]],
      'class': [null,[]],
      
    })
  }

  expensesubmit() {
    console.log(this.addexpenseForm.value);
  }

  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
  ]

}








  









  
  



