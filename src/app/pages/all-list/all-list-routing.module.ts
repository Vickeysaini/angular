import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { ClassesComponent } from './classes/classes.component';
import { ExpenseItemComponent } from './expense-item/expense-item.component';
import { AllListComponent } from './all-list.component';
import { AddOtherItemsComponent } from './add-other-items/add-other-items.component';
import { AddVendorsComponent } from './add-vendors/add-vendors.component';

const routes: Routes = [
  {
    path: '',
    component: AllListComponent,
    children: [
      { path: '', component: TaskComponent},
      { path: 'task', component: TaskComponent},
      { path: 'classes', component: ClassesComponent},
      { path: 'expense-item', component: ExpenseItemComponent},
      { path: 'add-other-items', component: AddOtherItemsComponent},
      { path: 'add-Vendors', component: AddVendorsComponent},

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllListRoutingModule { }
