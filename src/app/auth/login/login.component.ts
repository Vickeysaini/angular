import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from '../services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  password!: string;

  show = false;

  // ngOnInit() {
  //   this.password = 'password';
  // }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  imageURL!: string;
  email!: string;
  name!: string;
  token!: string;
  auth: any;


  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router) {}

  /**
   * Ininitalizing Google Authentication API and getting data from localstorage if logged in
   */
  ngOnInit() {
    this.reactiveFormFunction();
    this.password = 'password';
  }


  get f() {
    return this.loginForm.controls;
  }

  reactiveFormFunction() {
    let emailregex: RegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.loginForm = this.formBuilder.group({
      Email: [null, [Validators.required, Validators.email]],
      Password: [null, [Validators.required]],
      // rememberMe: [false],
    });
  }

  /**
   * Calling Google Authentication service
   */
  handlesubmit() {
    this.loginForm.value.type = 'normal';
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value)
        .pipe()
        .subscribe(
          (response) => {
            if (response.status) {
              this.router.navigate(['/']);
              sessionStorage.setItem('auth', response.data)
              this.authService.setCurrentUser(response.data)
              this.openSnackBar(response.message);
            }else{
              this.openSnackBar(response.message);
            }
          },
          (err) => {
            if (err) {
              this.openSnackBar(err);
            }
          }
        );
    }
  }
  
  openSnackBar(message:any) {
    let durationInSeconds = 5;
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: durationInSeconds * 1000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      data: message,
    });
  }
}
