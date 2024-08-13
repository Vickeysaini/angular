import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
  
})
// implements OnInit
export class ChangePasswordComponent implements OnInit {
  password = 'password';
  changePwdForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.reactiveFormFunction();
  }
  reactiveFormFunction() {
    this.changePwdForm = this.formBuilder.group(
      {
        newpassword: [ null, Validators.compose([Validators.required, Validators.minLength(6)])],
        password: [ null, Validators.compose([Validators.required, Validators.minLength(6)])],
      },
    );
  }
  // changepassword=new FormGroup({
  //   password:new FormControl(''),
  //   newpassword:new FormControl(''),
  // })
  changeData() 
  {
    console.warn(this.changePwdForm.value);
  }
}
