import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRatesheetListComponent } from '../add-ratesheet-list/add-ratesheet-list.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { NewRuleComponent } from '../new-rule/new-rule.component';
import { AddPreferencesComponent } from '../add-preferences/add-preferences.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

export interface PeriodicElement {
  Task: string;
  Active: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {Task: 'Client Meeting', Active: '✔'},
  {Task: 'Content writing', Active: '✔'},
  {Task: 'Programming', Active: '✔'},
  {Task: 'Web design', Active: '✔'},
];

@Component({
  selector: 'app-ratesheet-list',
  templateUrl: './ratesheet-list.component.html',
  styleUrls: ['./ratesheet-list.component.css']
})
export class RatesheetListComponent implements OnInit {

  displayedColumns: string[] = ['select', 'Task', 'Active'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
  
    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row $`;
  }

  
  constructor( private dailog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dailog.open(AddRatesheetListComponent,{
      width: '50%'
    });
  }

}
