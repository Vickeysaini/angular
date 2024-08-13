import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddCountryUserComponent } from '../../country/add-country-user/add-country-user.component';

@Component({
  selector: 'app-add-skill-user',
  templateUrl: './add-skill-user.component.html',
  styleUrls: ['./add-skill-user.component.css']
})
export class AddSkillUserComponent implements OnInit {

  constructor(private ref:MatDialogRef<AddCountryUserComponent>) { 

  }

  closeaddcountryuser(){
    this.ref.close()
  }

  ngOnInit(): void {
  }

}
