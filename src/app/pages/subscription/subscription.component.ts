import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ViewSubUserComponent } from './view-sub-user/view-sub-user.component';
import { AddSubUserComponent } from './add-sub-user/add-sub-user.component';

// ------ angular material table ---------

export interface UserData {
  firstname:string;
  lastname:string;
  designation:string;
  email:string;
}
/** Constants used to fill up our data base. */
const FIRSTNAME: string[] = [
  'Arman',
  'Siraj',
  'Mohsin',
  'Ayan',
  'Nabajish',
  'Asad',
  'Sahil',
  'Nabajish',
  'Altamash',
  'Mohsin',
  'Siraj',
  'Arman',
  'Mohsin',
  'Nabajish',
  'Siraj',
  'Asad',
  'Sahil',
  'Nabajish',
  'Altamash',
  'Mohsin',
  'Arman',
  'Asad',
  'Sahil',
  'Nabajish',
  'Altamash',
  'Mohsin',
  'Siraj',
];

const LASTNAME: string[] = [
  'Malik',
  'Qureshi',
  'Malik',
  'Safi',
  'Khan',
  'Malik',
  'Qureshi',
  'Malik',
  'Safi',
  'Usmani',
  'Qureshi',
  'Malik',
  'Malik',
  'Safi',
  'Qureshi',
  'Qureshi',
  'Malik',
  'Safi',
  'Qureshi',
  'Malik',
  'Safi',
  'Usmani',
  'Malik',
  'Safi',
  'Safi',
  'Usmani',
  'Malik',
  
  'Safi',
];

const DESIGNATION: string[] = [
  
];
// 

const EMAIL: string[] = [
  'malik@gmail.com',
  'ribanahmad@gmail.com',
  'malik@gmail.com',
  'suni@gmail.com',
  'aman12@gmail.com',
  'ayansaifi@gmail.com',
  'suni@gmail.com',
  'malik@gmail.com',
  'arman951@gmail.com',
  'nabajiskhan789@gmail.com',
  'suni@gmail.com',
  'malik@gmail.com',
  'aman12@gmail.com',
  'malik@gmail.com',
  'ayansaifi@gmail.com',
  'asadmalik654@gmail.com',
  'arman951@gmail.com',
  'malik@gmail.com',
  'nabajiskhan789@gmail.com',
];

// ------ angular material table  end ---------


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  displayedColumns: string[] = ['firstname', 'lastname', 'designation', 'email', 'active', 'edit'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dailog :MatDialog ,) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit(): void {
    
  }

  openaddsubuser(){
    this.dailog.open(AddSubUserComponent,{
      width:"35%",
    })
  }
  openDialog(element:any) {
    this.dailog.open(ViewSubUserComponent, {
      width: '500px',
      data: element
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  return {
    firstname: FIRSTNAME[Math.round(Math.random() * (FIRSTNAME.length - 1))],
    lastname: LASTNAME[Math.round(Math.random() * (LASTNAME.length - 1))],
    designation: DESIGNATION[Math.round(Math.random() * (DESIGNATION.length - 1))],
    email: EMAIL[Math.round(Math.random() * (EMAIL.length - 1))],
  };
}
