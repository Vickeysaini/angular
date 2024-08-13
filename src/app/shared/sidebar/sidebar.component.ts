import { Component, OnInit } from '@angular/core';
import { routes } from '../../consts/routes';
import { ShareService } from 'src/app/core/services/share.service';
import { EmployeeService } from 'src/app/core/services/employee.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],


})
export class SidebarComponent implements OnInit {

  public routes: typeof routes = routes;
  public isOpenUiElements = false;
  //standalone: true
  panelOpenState = false;
  userInfo: any;
  employeeData: any;
 constructor( private shareService: ShareService, private employeeService: EmployeeService){

 }
  ngOnInit(): void {
    let dd: any = sessionStorage.getItem('user');
    this.userInfo = JSON.parse(dd);
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployeeById(this.userInfo.currentUser._id).subscribe({
      next: response => {
        this.employeeData = response.data[0].Permissions[0]
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
  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }
}
