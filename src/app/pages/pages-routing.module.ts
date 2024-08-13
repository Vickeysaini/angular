import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { CustomersComponent, companyComponent } from './company/company.component';

import { InvoiceComponent } from './invoice/invoice.component';

// import { EmployeesComponent } from './employees/employees.component';
import { PagesComponent } from './pages.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ProjectsComponent } from './projects/projects.component';
import { UrlAccessGuard } from '../core/guards/url-access.guard';
import { ProfileComponent } from './profile/profile.component';
import { MakeFormComponent } from './make-form/make-form.component';
import { CompanyComponent } from './company/company.component';
import { UserComponent } from './user/user.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { CountryComponent } from './country/country.component';
import { SkillsComponent } from './skills/skills.component';
import { CategoryComponent } from './category/category.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { EmployeeComponent } from './employee/employee.component';
// import { companyComponent } from './customers/company.component';
// import {  UserComponent, } from './employees/user.component';
// import { CompanyComponent } from './customers/company.component';
// import { companyComponent } from './customers/company.component';





const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'company', component: CompanyComponent, },
      // { path: 'admin-expense', component: AdminExpenseComponent },
      // { path: 'invoice', component: InvoiceComponent },
      // { path: 'budget', component: BudgetComponent },
      { path: 'user', component: UserComponent, },
      // { path: 'edit-employee', component: EditEmployeeComponent },
      // { path: 'myaccount', component: MyAccountComponent,  },
      { path: 'project', component: ProjectsComponent, },
      { path: 'profile', component: ProfileComponent, },
      { path: 'makeform', component: MakeFormComponent, },
      { path: 'make-form', component: MakeFormComponent, },
      { path : 'subscription', component: SubscriptionComponent, },
      { path : 'country' , component : CountryComponent,},
      { path : 'skills' ,  component: SkillsComponent,},
      { path : 'category' ,  component: CategoryComponent,},
      { path : 'dynamic-table' ,  component: DynamicTableComponent,},
      { path : 'employer' ,  component: EmployeeComponent,}

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
