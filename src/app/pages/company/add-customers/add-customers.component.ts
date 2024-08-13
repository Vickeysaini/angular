import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomersService } from 'src/app/core/services/customers.service';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {
  AddCustomers!: FormGroup;
  userInfo!:any;
  constructor(
    private formBuilder: FormBuilder,
    private customerservice: CustomersService,
    private dialogRef: MatDialogRef<AddCustomersComponent>,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.InfoForm();
    let dd: any = sessionStorage.getItem('user');
    this.userInfo = JSON.parse(dd);
  }

  InfoForm() {
    this.AddCustomers = this.formBuilder.group({
      'CustomerName': [null, [Validators.required]],
      'IsActive': [false],
      'Notes': [null],
    })
  }
  addCustomers() {
    this.customerservice
      .createCustomers(this.AddCustomers.value, this.userInfo.currentUser._id).subscribe({
        next: response => {
          this.dialogRef.close()
          this.openSnackBar(response.message);
        },
        error: error => {
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
