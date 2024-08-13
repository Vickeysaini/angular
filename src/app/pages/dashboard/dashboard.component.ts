import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomersService } from 'src/app/core/services/customers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // userInfo: any;
  // data: any;
  // mytime: any;
  // time:any;
  // employee:any;
  // customers:any;
  // projects:any;
  // tasks:any;
  dataSource: any;
  dashboardData: any;
  constructor(
    private Customers: CustomersService,
  ) { }

  ngOnInit(): void {
    // let dd: any = sessionStorage.getItem('user');
    // this.userInfo = JSON.parse(dd);
    // this.getAllExpense();
    // this.getTime();
    // this.getCount();
    this.getDashboard();
  }
  // getAllExpense() {
  //   this.expenseService.getMyExpenseById(this.userInfo.currentUser._id).subscribe({
  //     next: response => {
     
  //       this.data = response.data.totalAmount;
  //       // console.log(this.data);
  //     },
  //     error: error => {
  //       if (error) {
  //         console.log(error)
  //       }
  //     },
  //     complete: () => {
  //       // console.log('Request complete');
  //     }
  //   });
  // }
  // getTime() {
  //   this.expenseService.getMyTimeTotal(this.userInfo.currentUser._id).subscribe({
  //     next: response => {
     
  //       this.time = response.data.totalTime;
  //       // console.log(this.time);
  //     },
  //     error: error => {
  //       if (error) {
  //         console.log(error)
  //       }
  //     },
  //     complete: () => {
  //       // console.log('Request complete');
  //     }
  //   });
  // }
  // getCount() {
  //   this.expenseService.getCountTotal(this.userInfo.currentUser._id).subscribe({
  //     next: response => {
     
  //       this.employee = response.data.employees;
  //       this.customers = response.data.customers;
  //       this.projects = response.data.projects;
  //       this.tasks = response.data.tasks;
  //       console.log(this.employee);
  //       console.log(this.customers);
  //       console.log(this.projects);
  //       console.log(this.tasks)
  //     },
  //     error: error => {
  //       if (error) {
  //         console.log(error)
  //       }
  //     },
  //     complete: () => {
  //       // console.log('Request complete');
  //     }
  //   });
  // }
  // employees(employees: any) {
  //   throw new Error('Method not implemented.');
  // }

  getDashboard() {
    this.Customers.getAllDashboard().subscribe({
      next: response => {
        this.dashboardData = response.data;
        console.log("Dashboard-Data ==>",this.dashboardData)
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
