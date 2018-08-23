import { Component, ElementRef } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ApiService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultdata: Array<any> = [];
  newAttribute: any = {};

  firstField = true;
  Ledger: string = '';
  Debit = 0.00;
  Credit = 0.00;
  isEditItems: boolean = true;
  Ledgerlist: any;


  debitsum = 0.00;
  creditsum = 0.00;

  constructor(
    private _Service: ApiService) {
    this.Ledgerlist = _Service.getdropdowndata();
    //console.log(this.);

  }

  addFieldValue(Ledger, Credit, Debit) {
    console.log(Ledger);
    this.resultdata.push({ Ledger: Ledger, Credit: Credit, Debit: Debit });
    this.newAttribute = {};
    this.Ledger = '';
    this.Credit = 0.00;
    this.Debit = 0.00;
  }

  deleteFieldValue(index) {
    this.resultdata.splice(index, 1);
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
  }

  Savedata() {

    this.resultdata.forEach(element => {
      this.debitsum += element.Debit;
      this.creditsum += element.Credit;

    });
    if (this.debitsum == this.creditsum) {
      alert('Matching');
    }
    else {
      alert('Mismatch');
    }
    // this.debitsum = this.creditsum = 0;

  }
}
