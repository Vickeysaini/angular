import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { TimesheetPreferencesComponent } from './timesheet-preferences/timesheet-preferences.component';
import { SideListComponent } from './side-list/side-list.component';
import { ExpensePreferencesComponent } from './expense-preferences/expense-preferences.component';
import { ApprovalWorkflowComponent } from './approval-workflow/approval-workflow.component';
import { OvertimeRulesComponent } from './overtime-rules/overtime-rules.component';
import { DcaaComplianceComponent } from './dcaa-compliance/dcaa-compliance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewRuleComponent } from './new-rule/new-rule.component';
import { EmailPreferencesComponent } from './email-preferences/email-preferences.component';
import { MaterialModule } from 'src/app/material.module';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CustomizeComponent } from './customize/customize.component';
import { DataToolsComponent } from './data-tools/data-tools.component';
import { AdvancedOptionsComponent } from './advanced-options/advanced-options.component';
import { AppsComponent } from './apps/apps.component';
import { RolesPreferencesComponent } from './roles-preferences/roles-preferences.component';
import { AddPreferencesComponent } from './add-preferences/add-preferences.component';
import { EmployeeTypeComponent } from './employee-type/employee-type.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { InvoiceRulesComponent } from './invoice-rules/invoice-rules.component';
import { ViewPaymentTeramsComponent } from './view-payment-terams/view-payment-terams.component';
import { AddPaymentTermsComponent } from './add-payment-terms/add-payment-terms.component';
import { InvoiceTemplateComponent } from './invoice-template/invoice-template.component';
import { AddInvoiceTemplateComponent } from './add-invoice-template/add-invoice-template.component';
import { RatesheetListComponent } from './ratesheet-list/ratesheet-list.component';
import { AddRatesheetListComponent } from './add-ratesheet-list/add-ratesheet-list.component';
import { BillingRateComponent } from './billing-rate/billing-rate.component';
import { AddRateComponent } from './add-rate/add-rate.component';
import { PaymentTermsComponent } from './payment-terms/payment-terms.component';


@NgModule({
  declarations: [
    SettingComponent,
    TimesheetPreferencesComponent,
    SideListComponent,
    ExpensePreferencesComponent,
    ApprovalWorkflowComponent,
    OvertimeRulesComponent,
    DcaaComplianceComponent,
    NewRuleComponent,
    EmailPreferencesComponent,
    CompanyInfoComponent,
    CustomizeComponent,
    DataToolsComponent,
    AdvancedOptionsComponent,
    AppsComponent,
    RolesPreferencesComponent,
    AddPreferencesComponent,
    EmployeeTypeComponent,
    AddEmployeeComponent,
    InvoiceRulesComponent,
    ViewPaymentTeramsComponent,
    AddPaymentTermsComponent,
    InvoiceTemplateComponent,
    AddInvoiceTemplateComponent,
    RatesheetListComponent,
    AddRatesheetListComponent,
    BillingRateComponent,
    AddRateComponent,
    PaymentTermsComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SettingModule { }
