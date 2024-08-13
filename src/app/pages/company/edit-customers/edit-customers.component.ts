import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomersService } from 'src/app/core/services/customers.service';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';
@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.css']
})
export class EditCustomersComponent implements OnInit {

  AddCustomers!: FormGroup;
  userInfo: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private customerservice: CustomersService,
    private dialogRef: MatDialogRef<CustomersService>,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.InfoForm();
    this.getCustomersData();
    let dd: any = sessionStorage.getItem('user');
    this.userInfo = JSON.parse(dd);
  }

  InfoForm() {
    this.AddCustomers = this.formBuilder.group({
      'CustomerName': [null, [Validators.required]],
      'IsActive': [false, null],
      'Notes': [null],
    })
  }

  getCustomersData() {
    this.AddCustomers.patchValue({
      CustomerName: this.data.CustomerName,
      Notes: this.data.Notes,
      IsActive: this.data.IsActive,
    });
  }


  updateCustomers() {
    this.customerservice
      .updateCustomers(this.AddCustomers.value, this.data._id).subscribe({
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
          // console.log('Request complete');
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


  // constructor() { }

  // ngOnInit(): void {
  // }

}
