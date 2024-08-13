import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddCountryUserComponent } from '../../country/add-country-user/add-country-user.component';

@Component({
  selector: 'app-add-sub-user',
  templateUrl: './add-sub-user.component.html',
  styleUrls: ['./add-sub-user.component.css']
})
export class AddSubUserComponent implements OnInit {

  constructor(private ref:MatDialogRef<AddCountryUserComponent>) { 

  }
  
  closeaddcountryuser(){
    this.ref.close()
  }

  ngOnInit(): void {
  }

}
