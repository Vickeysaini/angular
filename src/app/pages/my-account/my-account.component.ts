import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlanComponent } from '../plan/plan.component';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
  }
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(PlanComponent);
  }
}
