import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCostRateComponent } from './add-cost-rate/add-cost-rate.component';
import { AddBillRateComponent } from './add-bill-rate/add-bill-rate.component';
import { NewAssignmentComponent } from './new-assignment/new-assignment.component';
import { EditDeleteDataComponent } from './edit-delete-data/edit-delete-data.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  cost: string;
  rate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {cost: 'Begin Date', rate: 'Rate/hr'},
];

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
  // standalone: true,
  // imports: [MatTableModule],
})
export class EditEmployeeComponent implements OnInit {

  displayedColumns: string[] = ['cost', 'rate'];
  dataSource = ELEMENT_DATA;

  generalReactiveForm!: FormGroup;

  listItem = [
    {
      name : 'John Doe'
    },
    {
      name : 'John Doe'
    },
    {
      name : 'John Doe'
    },
    {
      name : 'John Doe'
    },
    {
      name : 'John Doe'
    },
    {
      name : 'John Doe'
    },
    {
      name : 'John Doe'
    },
    {
      name : 'John Doe'
    },
    {
      name : 'John Doe'
    },
    {
      name : 'John Doe'
    },
    {
      name : 'John Doe'
    },
  ]

  constructor(public dialog: MatDialog, private formbuilder: FormBuilder) { }

  AssignmentDialog(){
    this.dialog.open(NewAssignmentComponent,{
      width: '80%'
    });
  }

  openDialogone(){
    this.dialog.open(AddCostRateComponent,{
      width: '50%'
    });
  }

  openDialogtwo(){
    this.dialog.open(AddBillRateComponent);
  }

  deleteDialog(){
    this.dialog.open(EditDeleteDataComponent);
  }

  ngOnInit(): void {
    this.generalForm()
  }

  generalForm(){
    this.generalReactiveForm = this.formbuilder.group({
      'firstName': [null , [Validators.required]],
      'lastName': [null ,[Validators.required]],
      'employee': [null ,[Validators.required]],
      'employeeType': [null,[Validators.required]],
      'email': [null ,[Validators.required]],
      'code': [null ,[Validators.required]],
      'role': [null ,[Validators.required]],
      'title': [null ,[]],
      'referenceBy': [null ,[]],
      'allow': [null ,[Validators.required]],
      'activate': [null ,[Validators.required]],
      'cellPhone': [null ,[Validators.required]],
      'officePhone': [null ,[Validators.required]],
      'birthday': [null ,[]],
      'hireDate': [null ,[]],
      'homeAdd': [null ,[Validators.required]],
      'city': [null ,[Validators.required]],
      'stateZip': [null ,[Validators.required]],
      'country': [null ,[Validators.required]],
      'officeAdd': [null ,[Validators.required]],
      'officeCity': [null ,[]],
      'officeState': [null ,[]],
      'officeCountry': [null ,[]],
    })
  }

  submitGeneralForm(){
    console.log("My General Form Value ==>", this.generalReactiveForm.value);
  }

}