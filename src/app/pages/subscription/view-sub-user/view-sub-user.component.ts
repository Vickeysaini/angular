import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-sub-user',
  templateUrl: './view-sub-user.component.html',
  styleUrls: ['./view-sub-user.component.css']
})
export class ViewSubUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any
  ) { 
  }

  ngOnInit(): void {
  }

}
