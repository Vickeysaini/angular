import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';
import { UserComponent } from '../user.component';
interface Role {
  name: string;
  value: string;
}
@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css']
})
export class EditEmployeesComponent implements OnInit {
  AddInfoForm!: FormGroup;
  userInfo: any;
  Roles: Role[] = [
    {name: 'Employee', value: 'Employee'},
    {name: 'Manager', value: 'Manager'},
    {name: 'Admin', value: 'Admin'},
  ];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private empService: EmployeeService,
    private dialogRef: MatDialogRef<UserComponent>,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.InfoForm();
    this.getEmployeeData();
    let dd: any = sessionStorage.getItem('user');
    this.userInfo = JSON.parse(dd);


  }

  InfoForm() {
    this.AddInfoForm = this.formBuilder.group({
      'FirstName': [null, [Validators.required]],
      'LastName': [null, [Validators.required]],
      'Email': [null, [Validators.required,Validators.email]],
      'Employment': [null],
      'Notes': [null],
      'EstimatedCost': [null],
      'Role': [null, [Validators.required]],
    })
  }

  getEmployeeData(){
    this.AddInfoForm.patchValue({
      FirstName: this.data.FirstName,
      LastName: this.data.LastName,
      Email: this.data.Email,
      // StartDate: this.data.StartDate,
      Employment: this.data.Employment,
      Role: this.data.Role,
      Notes: this.data.Notes,
      EstimatedCost: this.data.EstimatedCost,
    });
  }

  updateEmployee() {
    this.empService
      .updateEmployeeById(this.AddInfoForm.value, this.data._id).subscribe({
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
