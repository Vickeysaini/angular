import { OnInit } from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ViewCountryUserComponent } from './view-country-user/view-country-user.component';
import { MatDialog } from '@angular/material/dialog';
import { AddCountryUserComponent } from './add-country-user/add-country-user.component';
import { CustomersService } from 'src/app/core/services/customers.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { UpperCasePipe } from '@angular/common';


// --- angular table start ---

/** Constants used to fill up our data base. */
// const FIRSTNAME: string[] = [
//   'Maia',
//   'Asher',
//   'Olivia',
//   'Atticus',
//   'Amelia',
//   'Jack',
//   'Charlotte',
//   'Theodore',
//   'Isla',
//   'Oliver',
//   'Isabella',
//   'Jasper',
//   'Cora',
//   'Levi',
//   'Violet',
//   'Arthur',
//   'Mia',
//   'Thomas',
//   'Elizabeth',
// ];
// const LASTNAME: string[] = [
//   'Maia',
//   'Asher',
//   'Olivia',
//   'Atticus',
//   'Amelia',
//   'Jack',
//   'Charlotte',
//   'Theodore',
//   'Isla',
//   'Oliver',
//   'Isabella',
//   'Jasper',
//   'Cora',
//   'Levi',
//   'Violet',
//   'Arthur',
//   'Mia',
//   'Thomas',
//   'Elizabeth',
// ];

// const DESIGNATION: string[] = [
  
// ];

// const EMAIL: string[] = [
//   'Maia@gmail.com',
//   'Asher@gmail.com',
//   'Olivia@gmail.com',
//   'Atticus@gmail.com',
//   'Amelia@gmail.com',
//   'Jack@gmail.com',
//   'Charlotte@gmail.com',
//   'Theodore@gmail.com',
//   'Isla@gmail.com',
//   'Oliver@gmail.com',
//   'Isabella@gmail.com',
//   'Jasper@gmail.com',
//   'Cora@gmail.com',
//   'Levi@gmail.com',
//   'Violet@gmail.com',
//   'Arthur@gmail.com',
//   'Mia@gmail.com',
//   'Thomas@gmail.com',
//   'Elizabeth@gmail.com',
// ];
// ------ angular material table  end ---------

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [UpperCasePipe]
})
export class CountryComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild('select') select!: MatSelect;

  allSelected = false;
  dataSource = new MatTableDataSource<country[]>();
  searchForm: FormGroup;

  

  countryData: any;
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
      columnDef: 'Short Name',
      header: 'Alpha2',
      cell: (element: any) => `${this.uppercase.transform(element.alpha2)}`,
      show: true,
    },
    {
      columnDef: 'Code',
      header: 'CountryCode',
      cell: (element: any) => `${this.uppercase.transform(element.countryCode)}`,
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
    private dialog:MatDialog,
    private Customers: CustomersService,
    private uppercase: UpperCasePipe,
    private fb: FormBuilder, 

  )
   {
    this.searchForm = this.fb.group({
      searchValue: [''],
      columns: this.fb.array(this.visibleColumns.map(column => this.fb.control(column.show)))
    });
    
  }

  ngOnInit(): void {
    this.searchForm.get('searchValue')?.valueChanges.subscribe((value: string) => {
      this.applyFilter(value);
    });
    this.getCountry()
  }

  openaddcountryuser(){
    this.dialog.open(AddCountryUserComponent,{
      width: '35%'
    })
  }
  opendialog(element : any){
    this.dialog.open(ViewCountryUserComponent ,{
      width: '500px',
      data:element
    })
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
  
  headerIconClick(){

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  getCountry() {
    this.Customers.getAllCountry().subscribe({
      next: response => {
        this.dataSource = new MatTableDataSource(response.data);
        // this.countryData = response.data.result
        console.log("Country-Data ==>",response)
      },
      error: error => {
        if (error) {
          console.log(error)
        }
      },
      complete: () => {
      }
    });
  }
}

export interface country {
  _id: string;
  name: string;
  countryCode: string;
}
