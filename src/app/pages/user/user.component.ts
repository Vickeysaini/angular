import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { DeleteConfirmationComponent } from 'src/app/shared/delete-confirmation/delete-confirmation.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// import { ViewCompanyComponent } from '../customers/view-company/view-company.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddVendorToListComponent } from './add-vendor-to-list/add-vendor-to-list.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [ 'FirstName', 'LastName', 'Designation', 'Email','resume', 'view', 'Action'];
  dataSource: any;
  resultsLength = 0;
  userInfo: any;
  

  constructor( 
    public dialog: MatDialog,
    private empService: EmployeeService, 
    ) { 
    }

    
  ngOnInit(): void {
    let dd: any = sessionStorage.getItem('user');
    this.userInfo = JSON.parse(dd);
    this.getAllEmployees()
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  addemployee() {
    this.dialog.open(AddEmployeeComponent, {
      // width: '500px',
      // height: '500px'
    }).afterClosed()
    .subscribe(result => {
      this.getAllEmployees();
    });
  }
  addvendor() {
    this.dialog.open(AddVendorToListComponent, {
      // width: '100%',
      // height: '50%'
    });
  }
  
  getAllEmployees(){
    this.empService.getAllEmployees(this.userInfo.currentUser._id).subscribe({
      next: response => {
        // const usersWithoutSpecifiedEmail = response.data.records.filter((user:any) => {
        //   return user._id !== this.userInfo.currentUser._id;
        // });
        this.dataSource = new MatTableDataSource(response.data.result);
        this.resultsLength = response.data.result;
        console.log("malik11user==>",response)
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
  openDialog(element:any) {
    this.dialog.open(ViewUserComponent, {
      width: '500px',
      data: element
    });
  }

  openEditDialog(element:any) {
    this.dialog.open(EditEmployeesComponent, {
      width: '500px',
      data: element
    }).afterClosed()
    .subscribe(result => {
      this.getAllEmployees();
    });
  }

  deleteDialog(element: any) {
    let obj = {
      id: element._id,
      selectedModule: 'employee'
    }
    this.dialog.open(DeleteConfirmationComponent, {
      data: obj,
      width: '500px',
    }).afterClosed().subscribe(result => {
      this.getAllEmployees();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

