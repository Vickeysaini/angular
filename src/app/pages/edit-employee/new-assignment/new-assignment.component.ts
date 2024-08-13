import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-assignment',
  templateUrl: './new-assignment.component.html',
  styleUrls: ['./new-assignment.component.css']
})
export class NewAssignmentComponent implements OnInit {

  listData = [
    {
      task: 'All Tasks',
      add: 'Add'
    },
    {
      task: 'Client Meeting',
      add: 'Add'
    },
    {
      task: 'Client Meeting Tasks',
      add: 'Add'
    },
    {
      task: 'Content writing',
      add: 'Add'
    },
    {
      task: 'Programming',
      add: 'Add'
    },
    {
      task: 'Web Design',
      add: 'Add'
    },
    {
      task: 'New Tasks',
      add: 'Add'
    },
    {
      task: 'Assign Tasks',
      add: 'Add'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
