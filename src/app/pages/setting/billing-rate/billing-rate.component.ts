import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { AddRateComponent } from '../add-rate/add-rate.component';

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
  selector: 'app-billing-rate',
  templateUrl: './billing-rate.component.html',
  styleUrls: ['./billing-rate.component.css']
})
export class BillingRateComponent implements OnInit {

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

  constructor(private dailog: MatDialog) { 
    
  }

  ngOnInit(): void {
  }

  openDialog(){
    this.dailog.open(AddRateComponent,{
      width: '50%'
    });
  }

}


















































