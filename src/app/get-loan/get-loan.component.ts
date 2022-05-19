import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-get-loan',
  templateUrl: './get-loan.component.html',
  styleUrls: ['./get-loan.component.css']
})
export class GetLoanComponent implements OnInit {

  constructor(private ts:LoanService) { }

  public loans=[];

  ngOnInit(): void {

    this.loans=this.ts.getAllLoanDetails()

  }



}
