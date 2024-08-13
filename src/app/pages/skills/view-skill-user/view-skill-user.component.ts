import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-skill-user',
  templateUrl: './view-skill-user.component.html',
  styleUrls: ['./view-skill-user.component.css']
})
export class ViewSkillUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any
  ) { 
  }

  ngOnInit(): void {
  }

}
