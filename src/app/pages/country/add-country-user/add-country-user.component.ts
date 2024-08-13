import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-country-user',
  templateUrl: './add-country-user.component.html',
  styleUrls: ['./add-country-user.component.css']
})
export class AddCountryUserComponent implements OnInit {

  constructor(private ref:MatDialogRef<AddCountryUserComponent>) { 

  }

  closeaddcountryuser(){
    this.ref.close()
  }

  ngOnInit(): void {
  }

}
