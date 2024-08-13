import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-cost-rate',
  templateUrl: './add-cost-rate.component.html',
  styleUrls: ['./add-cost-rate.component.css']
})
export class AddCostRateComponent implements OnInit {

  costReactiveForm!: FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.costForm();
  }

  costForm(){
    this.costReactiveForm = this.formbuilder.group({
      'cost': [null , [Validators.required]]
    })
  }

  costSubmitForm(){
    console.log("My value==>", this.costReactiveForm.value);
  }

}
