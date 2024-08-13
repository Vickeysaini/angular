import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';
interface Role {
  name: string;
  value: string;
}
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  AddInfoForm!: FormGroup;
  userInfo: any;

  constructor(
    private formBuilder: FormBuilder,
    private empService: EmployeeService,
    private dialogRef: MatDialogRef<AddEmployeeComponent>,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.InfoForm();
    let dd: any = sessionStorage.getItem('user');
    this.userInfo = JSON.parse(dd);
  }
  Roles: Role[] = [
    {name: 'Employee', value: 'Employee'},
    {name: 'Manager', value: 'Manager'},
    {name: 'Admin', value: 'Admin'},
  ];
  InfoForm() {
    this.AddInfoForm = this.formBuilder.group({
      'FirstName': [null, [Validators.required]],
      'LastName': [null, [Validators.required]],
      'Email': [null, [Validators.required]],
      'Role': [null, [Validators.required]],
      'Employment': [null],
      'Notes': [null],
      'EstimatedCost': [null],
    })
  }

  SubmitAddInfoForm() {
    this.empService .createEmployees(this.AddInfoForm.value, this.userInfo.currentUser._id).subscribe({
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

}
