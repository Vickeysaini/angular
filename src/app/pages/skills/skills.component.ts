import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { AddSkillUserComponent } from './add-skill-user/add-skill-user.component';
import { ViewSkillUserComponent } from './view-skill-user/view-skill-user.component';
import { CustomersService } from 'src/app/core/services/customers.service';
import { UpperCasePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css'],
    providers: [UpperCasePipe]
  })
  export class SkillsComponent implements OnInit {
  skillData: any;
  data: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild('select') select!: MatSelect;

  allSelected = false;
  dataSource = new MatTableDataSource<Skills[]>();
  searchForm: FormGroup;

  visibleColumns = [
    {
      columnDef: 'id',
      header: 'Id',
      cell: (element: any) => `${element._id}`,
      show: false,
    },
    {
      columnDef: 'Title',
      header: 'Name',
      cell: (element: any) => `${this.uppercase.transform(element.name)}`,
      show: true,
    },
    
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: any) =>
        `<button mat-icon-button (click)="openDialog(element)">
           <mat-icon>remove_red_eye</mat-icon>
         </button>`,
      show: true,
    },
    
  ];
  

  constructor(
    private fb: FormBuilder, 
    private uppercase: UpperCasePipe,
    private dailog :MatDialog ,
    private Customers: CustomersService
  ) {
    this.searchForm = this.fb.group({
      searchValue: [''],
      columns: this.fb.array(this.visibleColumns.map(column => this.fb.control(column.show)))
    });
  }

  ngOnInit() {
      this.searchForm.get('searchValue')?.valueChanges.subscribe(value => {
        this.applyFilter(value);
      });

    this.getskill()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  clearSearch() {
    this.searchForm.get('searchValue')?.setValue('');
  }

  toggleAllSelection() {
    if (this.allSelected) {
      this.select.options.forEach((item: MatOption) => item.select());
    } else {
      this.select.options.forEach((item: MatOption) => item.deselect());
    }
  }

  optionClick() {
    let newStatus = true;
    this.select.options.forEach((item: MatOption) => {
      if (!item.selected) {
        newStatus = false;
      }
    });
    this.allSelected = newStatus;
  }

  get columnsFormArray(): FormArray {
    return this.searchForm.get('columns') as FormArray;
  }

  get columns() {
    return this.visibleColumns;
  }

  get displayedColumns(): string[] {
    return this.visibleColumns.map((c) => c.columnDef);
  }
  openaddskilluser(){
    this.dailog.open(AddSkillUserComponent,{
      width:"35%",
    })
  }
  openDialog(element:any) {
    console.log("==>hello",)
    this.dailog.open(ViewSkillUserComponent, {
      width: '500px',
      data: element
    });
  }

  headerIconClick(){

  }

  getskill() {
    this.Customers.getAllSkill().subscribe({
      next: response => {
        // this.dataSource = response.data.result;
        // this.skillData = response.data.result;
        this.dataSource.data = response.data.data;
        console.log("Skill-Data==>",this.dataSource.paginator)
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
}

export interface Skills {
  _id: string;
  name: string;
}

  

