import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: '✔'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: '✔'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: '✔'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: '✔'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: '✔'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: '✔'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: '✔'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: '✔'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: '✔'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: '✔'},
];


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent  {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}








