import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {
  empForm: FormGroup

  constructor(private fb: FormBuilder) { 
    this.empForm = this.fb.group({
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    })
  }

  onFormSubmit(){
    if(this.empForm.valid){
      console.log(this.empForm.value);
    }
  }

  ngOnInit(): void {
  }

  education: string[] =[
    'High School',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ]

}
