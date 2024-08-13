import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderModule } from './header/header.module';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { UserTimeChartComponent } from './user-time-chart/user-time-chart.component';
import { CompanyInfoChartComponent } from './company-info-chart/company-info-chart.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SharedComponent,
    SidebarComponent,
    LayoutComponent,
    SnackBarComponent,
    UserTimeChartComponent,
    CompanyInfoChartComponent,
    DeleteConfirmationComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HeaderModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    LayoutComponent,
    UserTimeChartComponent,
  ],
})
export class SharedModule { }
