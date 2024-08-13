import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomersService } from 'src/app/core/services/customers.service';
import { ProjectsService } from 'src/app/core/services/projects.service';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';

interface Client {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})
export class AddProjectsComponent implements OnInit {
  taskForm!: FormGroup;
  dataSource: any;
  client: any;
  AddCustomers!: FormGroup;
  userInfo: any;

  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectsService,
    private customerService: CustomersService,
    private dialogRef: MatDialogRef<AddProjectsComponent>,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.reactiveFormFunction();
    let dd: any = sessionStorage.getItem('user');
    this.userInfo = JSON.parse(dd);
    this.getCustomers();
  }

  reactiveFormFunction() {
    this.taskForm = this.formBuilder.group(
      {
        CustomerId: [null],
        ProjectName: [null, [Validators.required]],
        Notes: [null],
      },
    );
  }

  getCustomers() {
    this.customerService.getCustomersByAdminId(this.userInfo.currentUser._id).subscribe({
      next: response => {
        this.client = response.data.records;
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
  taskData() {
    this.projectService.createProjects(this.taskForm.value, this.userInfo.currentUser._id).subscribe({
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
