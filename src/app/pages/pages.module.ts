import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CustomersComponent } from './customers/company.component';


import { SharedModule } from "../shared/shared.module";
import { InvoiceComponent } from './invoice/invoice.component';
// import { UserComponent, } from './employees/user.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { PlanComponent } from './plan/plan.component';
// import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
// import { AddVendorToListComponent } from './employees/add-vendor-to-list/add-vendor-to-list.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ProjectsComponent } from './projects/projects.component';

import { AddProjectsComponent } from './projects/add-projects/add-projects.component';
// import { AddCustomersComponent } from './customers/add-customers/add-customers.component';
import { AddCostRateComponent } from './edit-employee/add-cost-rate/add-cost-rate.component';
import { AddBillRateComponent } from './edit-employee/add-bill-rate/add-bill-rate.component';
import { NewAssignmentComponent } from './edit-employee/new-assignment/new-assignment.component';

// import { ViewEmployeesComponent } from './employees/view-user/view-user.component';


import { ViewProjectsComponent } from './projects/view-projects/view-projects.component';
import { EditDeleteDataComponent } from './edit-employee/edit-delete-data/edit-delete-data.component';
import { EditProjectsComponent } from './projects/edit-projects/edit-projects.component';
// import { EditEmployeesComponent } from './employees/edit-employees/edit-employees.component';
// import { EditCustomersComponent } from './customers/edit-customers/edit-customers.component';
import { ProfileComponent } from './profile/profile.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MakeFormComponent } from './make-form/make-form.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CompanyComponent } from './company/company.component';
import { UserComponent } from './user/user.component';
import { ViewCompanyComponent } from './company/view-company/view-company.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { EditEmployeesComponent } from './user/edit-employees/edit-employees.component';
import { AddEmployeeComponent } from './user/add-employee/add-employee.component';
import { AddVendorToListComponent } from './user/add-vendor-to-list/add-vendor-to-list.component';
import { AddCustomersComponent } from './company/add-customers/add-customers.component';
import { EditCustomersComponent } from './company/edit-customers/edit-customers.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { CountryComponent } from './country/country.component';
import { SkillsComponent } from './skills/skills.component';
import { CategoryComponent } from './category/category.component';
import { ViewSubUserComponent } from './subscription/view-sub-user/view-sub-user.component';
import { ViewCountryUserComponent } from './country/view-country-user/view-country-user.component';
import { AddCountryUserComponent } from './country/add-country-user/add-country-user.component';
import { AddSkillUserComponent } from './skills/add-skill-user/add-skill-user.component';
import { ViewSkillUserComponent } from './skills/view-skill-user/view-skill-user.component';
import { AddCategoryUserComponent } from './category/add-category-user/add-category-user.component';
import { ViewCategoryUserComponent } from './category/view-category-user/view-category-user.component';
import { AddSubUserComponent } from './subscription/add-sub-user/add-sub-user.component';
import { ToggleColumnsPipe } from '../core/pipes/toggle-columns.pipe';
import { HighlightPipe } from '../core/pipes/mat-table-highlight-search.pipe';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeComponent } from './employee/add-employe/add-employe.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        CompanyComponent,
        UserComponent,
        InvoiceComponent,
        MyAccountComponent,
        PlanComponent,
        AddEmployeeComponent,
        AddVendorToListComponent,
        EditEmployeeComponent,
        AddProjectsComponent,
        AddCustomersComponent,
        AddCostRateComponent,
        AddBillRateComponent,
        NewAssignmentComponent,
        ViewCompanyComponent,
        ViewUserComponent,

        ProjectsComponent,
        // ViewCompanyComponent,
        ViewProjectsComponent,
        EditDeleteDataComponent,
        EditProjectsComponent,
        EditEmployeesComponent,
        EditCustomersComponent,
        ProfileComponent,
        MakeFormComponent,
        SubscriptionComponent,
        CountryComponent,
        SkillsComponent,
        CategoryComponent,
        ViewSubUserComponent,
        ViewCountryUserComponent,
        AddCountryUserComponent,
        AddSkillUserComponent,
        ViewSkillUserComponent,
        AddCategoryUserComponent,
        ViewCategoryUserComponent,
        AddSubUserComponent,
        DynamicTableComponent,
        HighlightPipe,
        ToggleColumnsPipe,
        EmployeeComponent,
        AddEmployeComponent
        

    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ReactiveFormsModule,
        MaterialModule,
        FormsModule,
        MatFormFieldModule,
        SharedModule,
        MatDialogModule,
    ]
})
export class PagesModule { }
