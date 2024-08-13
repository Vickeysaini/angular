import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, Validators, FormBuilder } from '@angular/forms';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';
import { ForgotPasswordService } from '../services/forgot-password.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {


  password !: FormGroup;
  group: any;
  dialogRef: any;
  submitted = false;
  userInfo: any;
  data: any;
  success: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private forgotService: ForgotPasswordService,
  ) { }
  ngOnInit(): void {

    let dd: any = sessionStorage.getItem('user');
    this.userInfo = JSON.parse(dd);
    this.reactiveFormFunction();

  }


  reactiveFormFunction() {
    this.password = this.formBuilder.group(
      {
        email: [null, [Validators.required, Validators.email]],
      },
    );
  }


  forgot() {

    this.forgotService.forgetPassword(this.password.value).subscribe({
      next: response => {
        if (response.status) {
          this.success = true;
          // this.openSnackBar(response.message);
        }
        else {
          this.success = false;
        }
      },
      error: error => {
        // console.log("Error", error)
        if (error) {
          this.openSnackBar(error);

        }
      },
      complete: () => {
      }
    });

  }
  openSnackBar(message: string) {
    let durationInSeconds = 5;
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: durationInSeconds * 1000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      data: message,
    });
  }

}
