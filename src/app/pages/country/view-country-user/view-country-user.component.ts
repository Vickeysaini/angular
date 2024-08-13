import { publishFacade } from '@angular/compiler';
import { Component,  Inject,  OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-country-user',
  templateUrl: './view-country-user.component.html',
  styleUrls: ['./view-country-user.component.css']
})
export class ViewCountryUserComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any){}

  ngOnInit(): void {
  }

}
