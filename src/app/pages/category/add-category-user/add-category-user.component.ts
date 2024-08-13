import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddCountryUserComponent } from '../../country/add-country-user/add-country-user.component';

@Component({
  selector: 'app-add-category-user',
  templateUrl: './add-category-user.component.html',
  styleUrls: ['./add-category-user.component.css']
})
export class AddCategoryUserComponent implements OnInit {

  constructor(private ref:MatDialogRef<AddCountryUserComponent>) { 

  }

  closeaddcountryuser(){
    this.ref.close()
  }

  ngOnInit(): void {
  }

}
