import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  plans = [
    {
      plan: 'Free',
      fee: '$0.00',
      heading: 'per user/month',
      list1:'Upto 5 Users',
      list2:'TimeSheets',
      list3:'X',
      list4:'X',
      list5:'Customizable',
      list6:'X',
      list7:'X',
      list8:'X',
      list9:'X',
      list10:'X',
    },
    {
      plan: 'Professional',
      fee: '$5.99',
      heading: 'per user/month',
      list1:'Upto 5 Users',
      list2:'TimeSheets',
      list3:'Employee Expenses',
      list4:'QuickBooks Integration',
      list5:'Customizable',
      list6:'X',
      list7:'X',
      list8:'X',
      list9:'Value Pricing',
      list10:'Add Invoicing $2 per user/month',
    },
    {
      plan: 'Enterprise',
      fee: '$9.99',
      heading: 'per user/month',
      list1:'Upto 5 Users',
      list2:'TimeSheets',
      list3:'Employee Expenses',
      list4:'QuickBooks Integration',
      list5:'Customizable',
      list6:'Approval Workflow',
      list7:'Project Assignments',
      list8:'Budgeting',
      list9:'Value Pricing',
      list10:'Add Invoicing $2 per user/month',
    },
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
