import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-category-user',
  templateUrl: './view-category-user.component.html',
  styleUrls: ['./view-category-user.component.css']
})
export class ViewCategoryUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any){}

  ngOnInit(): void {
  }

}
