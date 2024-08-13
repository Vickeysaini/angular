import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetPreferencesComponent } from './timesheet-preferences/timesheet-preferences.component';
import { SettingComponent } from './setting.component';
import { ExpensePreferencesComponent } from './expense-preferences/expense-preferences.component';
import { ApprovalWorkflowComponent } from './approval-workflow/approval-workflow.component';
import { OvertimeRulesComponent } from './overtime-rules/overtime-rules.component';
import { DcaaComplianceComponent } from './dcaa-compliance/dcaa-compliance.component';
import { EmailPreferencesComponent } from './email-preferences/email-preferences.component';
import { CompanyInfoChartComponent } from 'src/app/shared/company-info-chart/company-info-chart.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CustomizeComponent } from './customize/customize.component';
import { DataToolsComponent } from './data-tools/data-tools.component';
import { AdvancedOptionsComponent } from './advanced-options/advanced-options.component';
import { AppsComponent } from './apps/apps.component';
import { RolesPreferencesComponent } from './roles-preferences/roles-preferences.component';
import { EmployeeTypeComponent } from './employee-type/employee-type.component';
import { InvoiceRulesComponent } from './invoice-rules/invoice-rules.component';
import { InvoiceTemplateComponent } from './invoice-template/invoice-template.component';
import { RatesheetListComponent } from './ratesheet-list/ratesheet-list.component';
import { BillingRateComponent } from './billing-rate/billing-rate.component';
import { PaymentTermsComponent } from './payment-terms/payment-terms.component';

const routes: Routes = [
  {
    path: '',
    component: SettingComponent,
    children: [
      {
        path: 'timesheet-preferences', component: TimesheetPreferencesComponent
      },
      {
        path: 'expense-preferences', component: ExpensePreferencesComponent
      },
      {
        path: 'approval-workflow', component: ApprovalWorkflowComponent
      },
      {
        path: 'overtime-rules', component: OvertimeRulesComponent
      },
      {
        path: 'dcaa-compliance', component: DcaaComplianceComponent
      },
      {
        path: 'email-Preferences', component: EmailPreferencesComponent
      },
      {
        path: 'company-info', component: CompanyInfoComponent
      },
      {
        path: 'Customize', component: CustomizeComponent
      },
      {
        path: 'data-tools' , component: DataToolsComponent
      },
      {
        path: 'advanced-options', component: AdvancedOptionsComponent
      },
      {
        path: 'apps' , component: AppsComponent
      },
      {
        path: 'roles-preferences' , component: RolesPreferencesComponent
      },
      {
        path: 'employee-type', component: EmployeeTypeComponent
      },
      {
        path: 'invoice-rules', component: InvoiceRulesComponent
      },
      {
        path: 'invoice-template', component: InvoiceTemplateComponent
      },
      {
        path: 'ratesheet-list', component: RatesheetListComponent
      },
      {
        path: 'billing-rate', component: BillingRateComponent
      },
      {
        path: 'payment-terms', component: PaymentTermsComponent
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
