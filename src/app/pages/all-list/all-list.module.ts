import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllListRoutingModule } from './all-list-routing.module';
import { ExpenseItemComponent } from './expense-item/expense-item.component';
import { TaskComponent } from './task/task.component';
import { ClassesComponent } from './classes/classes.component';
import { MaterialModule } from 'src/app/material.module';
import { SideList2Component } from './side-list2/side-list2.component';
import { AllListComponent } from './all-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddClassComponent } from './add-class/add-class.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddOtherItemsComponent } from './add-other-items/add-other-items.component';
import { OtherItemsComponent } from './other-items/other-items.component';
import { AddVendorsComponent } from './add-vendors/add-vendors.component';
import { VendorsComponent } from './vendors/vendors.component';


@NgModule({
  declarations: [
    AllListComponent,
    ExpenseItemComponent,
    TaskComponent,
    ClassesComponent,
    SideList2Component,
    AddTaskComponent,
    AddClassComponent,
    AddExpenseComponent,
    AddOtherItemsComponent,
    OtherItemsComponent,
    AddVendorsComponent,
    VendorsComponent
  ],
  imports: [
    CommonModule,
    AllListRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AllListModule { }
