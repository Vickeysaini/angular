// import { Component, OnInit } from '@angular/core';
import { Component, EventEmitter, Inject, OnInit, Output,NgModule } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomersService } from 'src/app/core/services/customers.service';
import { ProjectsService } from 'src/app/core/services/projects.service';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';
import { ProjectsComponent } from '../projects.component';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css'],
})
export class EditProjectsComponent implements OnInit {

  AddProject!: FormGroup;
  dataSource: any;
  client: any;
  AddCustomers!: FormGroup;
  userInfo: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private projectService: ProjectsService,
    private customerService: CustomersService,
    private dialogRef: MatDialogRef<ProjectsComponent>,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    
    this.reactiveFormFunction();
    let dd: any = sessionStorage.getItem('user');
    this.userInfo = JSON.parse(dd);
    this.getCustomers();
    this.getProjectData();
  }

  reactiveFormFunction() {
    this.AddProject = this.formBuilder.group(
      {
        CustomerId: [null],
        ProjectName: [null, [Validators.required]],
        Notes: [null],
        StartDate: [null],
        EndDate: [null],
        LifeTimeBudget: [null],
        IsBillable: [null],
        IsDeleted: [null],
        IselligibleTime: [null],
        JobElligibleRp: [null],
        NonAllLocatedJob: [null],
        SubjectToApproval: [null],
        ListDisplay: [null],
        LoadedProperties: [null],
        SecondaryBilling: [null],
        CompanyBilling: [null],
        Scramble: [null],
        ProjectEstimation:[null],

      },
    );
  }

  getProjectData() {
    this.AddProject.patchValue({
      ProjectName: this.data.ProjectName,
      CustomerId: this.data.CustomerId?._id,
      ProjectNumber: this.data.ProjectNumber,
      StartDate: this.data.StartDate,
      EndDate: this.data.EndDate,
      LifeTimeBudget: this.data.LifeTimeBudget,
      IsBillable: this.data.IsBillable,
      IsDeleted: this.data.IsDeleted,
      IselligibleTime: this.data.IselligibleTime,
      JobElligibleRp: this.data.JobElligibleRp,
      NonAllLocatedJob: this.data.NonAllLocatedJob,
      SubjectToApproval: this.data.SubjectToApproval,
      ListDisplay: this.data.ListDisplay,
      LoadedProperties: this.data.LoadedProperties,
      SecondaryBilling: this.data.SecondaryBilling,
      CompanyBilling: this.data.CompanyBilling,
      Scramble: this.data.Scramble,
      ProjectEstimation:this.data.ProjectEstimation,
      Notes: this.data.Notes,
    });
  }
  getCustomers(){
    this.customerService.getCustomersByAdminId(this.userInfo.currentUser._id).subscribe({
      next: response => {
        this.client = response.data.records;
      },
      error: error => {
        if(error){
          console.log(error)
        }
      },
      complete: () => {
        // console.log('Request complete');
      }
    });
  }

  updateProject() {
    this.projectService
      .updateProjects(this.AddProject.value, this.data._id).subscribe({
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

  PrijectData() {
    this.projectService.createProjects(this.AddProject.value, this.userInfo.currentUser._id).subscribe({
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
