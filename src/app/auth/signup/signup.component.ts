import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ConfirmPasswordValidator } from './password';
import { Service } from 'src/app/core/service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';
import { Router } from '@angular/router';
import { AuthService } from '../services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  password = 'password';
  passwordShow: boolean = false;
  ConfirmPassword!: string;
  ConfirmPasswordShow: boolean = false;
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reactiveFormFunction();
    this.ConfirmPassword = 'ConfirmPassword';
  }

  reactiveFormFunction() {
    let emailregex: RegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.signupForm = this.formBuilder.group(
      {
        FirstName: [null, [Validators.required]],
        LastName: [null, [Validators.required]],
        Email: [null, [Validators.required, Validators.email]],
        Password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
        isSuperAdmin: [true],
        Role: ["Admin"],
        Employement: ["Full Time"],
        Status: ["active"],
        Notes: [null],
        EstimatedCost: [null],
      },
    );
  }

  ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      let control = formGroup.controls[controlName];
      let matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmPasswordValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onClickShowPassword() {
    if (this.password === 'password') {
      this.password = 'text';
      this.passwordShow = true;
    } else {
      this.password = 'password';
      this.passwordShow = false;
    }
  }

  onClickShowConfirm_Password() {
    if (this.password === 'password') {
      this.password = 'text';
      this.ConfirmPasswordShow = true;
    } else {
      this.password = 'password';
      this.ConfirmPasswordShow = false;
    }
  }

  singupData() {
    this.signupForm.value.employeeType = 'Admin';
    if (this.signupForm.valid) {
      this.authService
        .singup(this.signupForm.value)
        .pipe()
        .subscribe(
          (response) => {
            if (response.status) {
              this.router.navigate(['/auth/step2']);
              sessionStorage.setItem('auth', response.data);
              this.authService.setCurrentUser(response.data)
              this.openSnackBar();
            }
          },
          (err) => {
            if (err) {
              console.log(err.message);
            }
          }
        );
    }
  }

  openSnackBar() {
    let durationInSeconds = 5;
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: durationInSeconds * 1000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      data: 'Singup Successfully!!',
    });
  }

  // constructor() { }

  // ngOnInit(): void {
  // }
}
