import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { MatDialog } from '@angular/material/dialog';
import { CustomersService } from 'src/app/core/services/customers.service';
import { AuthService } from 'src/app/auth/services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteConfirmationComponent } from 'src/app/shared/delete-confirmation/delete-confirmation.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';
import { MatTableDataSource } from '@angular/material/table';
import { ViewCompanyComponent } from './view-company/view-company.component';
export interface PeriodicElement {
  name: string;
  symbol: string;
}
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'CompanyDetail', 'CompanySize', 'action'];
  dataSource: any;
  userInfo: any;
  resultsLength = 0;

  ngOnInit(): void {
    let dd: any = sessionStorage.getItem('user');
    this.userInfo = JSON.parse(dd);
    this.getCustomers()
  }

  someFunction(data: any) {
    console.log(data);
  }
  constructor(
    public dialog: MatDialog,
    private Customers: CustomersService,
    private _snackBar: MatSnackBar,
    private authService: AuthService
  ) { }
  openDialog() {
    this.dialog.open(AddCustomersComponent, {
      width: '500px'
    }).afterClosed().subscribe(result => {
      this.getCustomers();
    });
  }
  openEditDialog(element: any) {
    this.dialog.open(EditCustomersComponent, {
      width: '500px',
      data: element
    }).afterClosed().subscribe(result => {
      this.getCustomers();
    });
  }
  getCustomers() {
    this.Customers.getAllCustomers(this.userInfo.currentUser._id).subscribe({
      next: response => {
        this.dataSource = new MatTableDataSource(response.data.result);
        this.resultsLength = response.data.result
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

  openDialogCustomers(element: any) {
    this.dialog.open(ViewCompanyComponent,{
      width: '500px',
      data: element
    }).afterClosed().subscribe(result => {
      this.getCustomers();
    });
  }

  deleteDialog(element: any) {
    let obj = {
      id: element._id,
      selectedModule: 'customer'
    }
    this.dialog.open(DeleteConfirmationComponent, {
      data: obj,
      width: '500px',
    }).afterClosed().subscribe(result => {
      this.getCustomers();
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}











