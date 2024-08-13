import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';
import { MatDialog } from '@angular/material/dialog';
interface Role {
  name: string;
  value: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data: any
  userInfo: any;
  // resultsLength: any;
  dataSource: any;
  employeeData: any;
  // dialog: any;
  element: any;
  success: boolean = false;
  employeeForm!: FormGroup;
  employee!:FormGroup;
  Roles: Role[] = [
    { name: 'Employee', value: 'Employee' },
    { name: 'Manager', value: 'Manager' },
    { name: 'Admin', value: 'Admin' },
  ];

  constructor(
    public dialog: MatDialog,
    private empService: EmployeeService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    let dd: any = sessionStorage.getItem('user');
    this.userInfo = JSON.parse(dd);
    this.employeeFormFunction();
    this.getEmployees();
  }
  onButtonClick() {
    console.log('Hide View');
    this.success = true; 
  }
  onClick(){
    this.success = false; 
    {
      2000
    }
  }
  employeeFormFunction() {
    this.employeeForm = this.formBuilder.group({
      'FirstName': [null, [Validators.required]],
      'LastName': [null, [Validators.required]],
      'Email': [null, [Validators.required]],
      'Role': [null, [Validators.required]],
      'Employment': [null],
      'Notes': [null],
      'EstimatedCost': [null],
    })
  }


  getEmployees() {
    this.empService.getEmployeeById(this.userInfo.currentUser._id).subscribe({
      next: response => {
        this.employeeData = response.data[0]
        // this.employeeData = response.data;
        console.log(this.employeeData)
        this.patchEmployeeData();
      },

      error: error => {
        if (error) {
          console.log(error)
        }
      },
      complete: () => {
        // console.log('Request complete');
      }
    });
  }

  patchEmployeeData() {
    this.employeeForm.patchValue({
      FirstName: this.employeeData.FirstName,
      LastName: this.employeeData.LastName,
      Email: this.employeeData.Email,
      Employment: this.employeeData.Employment,
      Role: this.employeeData.Role,
      Notes: this.employeeData.Notes,
      EstimatedCost: this.employeeData.EstimatedCost,
    });
  }

 
  updateEmployee() {
    this.empService
      .updateEmployeeById(this.employeeForm.value, this.employeeData._id).subscribe({
        next: response => {
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
