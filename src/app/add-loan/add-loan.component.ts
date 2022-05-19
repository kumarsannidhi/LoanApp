import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {

  constructor(private st:LoanService) { }

  ngOnInit(): void {

    throw new Error('Method not implemented.');

  }

  public loanForm= new FormGroup({

    id: new FormControl(),

    name: new FormControl(),

    la: new FormControl(),

    dol: new FormControl(),

    tenure: new FormControl(),

    roi: new FormControl()

  })

  add(){

    console.log(this.loanForm.value)

    this.st.addLoanDetail(this.loanForm.value)

  }

}