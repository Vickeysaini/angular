import { Component, EventEmitter, Input, Output } from '@angular/core';

import { routes } from '../../../../consts';
import { User } from 'src/app/auth/models';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(public dialog: MatDialog, public router:Router,private http: HttpClient) {
  }

  

  

 



  






  @Input() user: any;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public routes: typeof routes = routes;
  public signOutEmit(): void {
    this.signOut.emit();
  }
  
  openDialog() {
    this.dialog.open(ChangePasswordComponent,{
      width:'500px'
    });
  }
  gotoPage(path:string){
    this.router.navigate([path])
  }





  
 
}
