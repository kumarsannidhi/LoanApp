import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }
  public loanDetails=[]



  addLoanDetail(Loan:Loan){

    return this.loanDetails.push(Loan);

 

  }

  getAllLoanDetails(){

    return this.loanDetails

  }

  deleteLoanDetails(loanId:any){

    for(let i=0;i<this.loanDetails.length;i++){

      if(this.loanDetails[i].loanId==loanId){

         this.loanDetails.splice(i,1);

      }

    }

  }
}
