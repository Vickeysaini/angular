import { Component, OnInit } from '@angular/core';
import { ViewPaymentTeramsComponent } from '../view-payment-terams/view-payment-terams.component';
import { MatDialog } from '@angular/material/dialog';
import { AddPaymentTermsComponent } from '../add-payment-terms/add-payment-terms.component';

@Component({
  selector: 'app-invoice-rules',
  templateUrl: './invoice-rules.component.html',
  styleUrls: ['./invoice-rules.component.css']
})
export class InvoiceRulesComponent implements OnInit {
  
  constructor(private dailog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1(){
    this.dailog.open(ViewPaymentTeramsComponent,{
      width: '47%'
    });
  }

  openDialog2(){
    this.dailog.open(AddPaymentTermsComponent,{
      width: '47%'
    });
  }
}
