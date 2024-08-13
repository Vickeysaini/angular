import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-bill-rate',
  templateUrl: './add-bill-rate.component.html',
  styleUrls: ['./add-bill-rate.component.css']
})
export class AddBillRateComponent implements OnInit {

  billingReactiveForm!: FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.billingForm()
  }

  billingForm() {
    this.billingReactiveForm = this.formbuilder.group({
      'rate': [null, [Validators.required]],
      'ratesheet': [null, [Validators.required]],
    })
  }

  billingSubmitForm() {
    console.log("My Billing Data==>", this.billingReactiveForm.value);
  }

}
