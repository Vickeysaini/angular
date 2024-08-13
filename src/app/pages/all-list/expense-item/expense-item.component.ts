import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddExpenseComponent } from '../add-expense/add-expense.component';

export interface PeriodicElement {
  Account: string;
  Accounttype: string;
  AllowExpense: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Account: 'Airfare & Related Costs', Accounttype:'Expense', AllowExpense: '✔'},
  {Account: 'Gas', Accounttype: 'Expense', AllowExpense: '✔'},
  {Account: 'Lodging', Accounttype: 'Expense', AllowExpense: '✔'},
  {Account: 'Meals & Entertainment', Accounttype: 'Expense', AllowExpense: '✔'},
  {Account: 'Mileage', Accounttype: 'Expense', AllowExpense: '✔'},
  {Account: 'Parking', Accounttype: 'Expense', AllowExpense: '✔'},
  {Account: 'Phone/Fax', Accounttype: 'Expense', AllowExpense: '✔'},
  {Account: 'Transportation', Accounttype: 'Expense', AllowExpense: '✔'},
];


@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.css']
})
export class ExpenseItemComponent  {

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDialog() {
    this.dialog.open(AddExpenseComponent,{
      width: '60%'
    });
  }
  displayedColumns: string[] = ['select', 'Account', 'Accounttype', 'AllowExpense'];
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

  
}




 







