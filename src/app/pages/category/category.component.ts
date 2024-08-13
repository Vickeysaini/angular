import { OnInit } from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryUserComponent } from './add-category-user/add-category-user.component';
import { ViewCategoryUserComponent } from './view-category-user/view-category-user.component';


// --- angular table start ---

export interface UserData {
  firstname: string;
  lastname: string;
  designation: string;
  email: string;
}
/** Constants used to fill up our data base. */
const FIRSTNAME: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];
const LASTNAME: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

const DESIGNATION: string[] = [
  
];

const EMAIL: string[] = [
  'Maia@gmail.com',
  'Asher@gmail.com',
  'Olivia@gmail.com',
  'Atticus@gmail.com',
  'Amelia@gmail.com',
  'Jack@gmail.com',
  'Charlotte@gmail.com',
  'Theodore@gmail.com',
  'Isla@gmail.com',
  'Oliver@gmail.com',
  'Isabella@gmail.com',
  'Jasper@gmail.com',
  'Cora@gmail.com',
  'Levi@gmail.com',
  'Violet@gmail.com',
  'Arthur@gmail.com',
  'Mia@gmail.com',
  'Thomas@gmail.com',
  'Elizabeth@gmail.com',
];
// ------ angular material table  end ---------

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  displayedColumns: string[] = [ 'firstname', 'lastname', 'designation', 'email', 'active', 'edit',];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog,) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
    
  }

  openaddcategoryuser(){
    this.dialog.open(AddCategoryUserComponent,{
      width: '35%'
    })
  }
  opendialog(element : any){
    this.dialog.open(ViewCategoryUserComponent ,{
      width: '500px',
      data:element
    })
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
