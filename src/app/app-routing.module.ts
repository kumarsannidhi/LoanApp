import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { GetLoanComponent } from './get-loan/get-loan.component';
import { RemoveLoanComponent } from './remove-loan/remove-loan.component';

const routes: Routes = [
  
  {path:'add',component:AddLoanComponent},
  {path:'remove',component:RemoveLoanComponent},
  {path:'get',component:GetLoanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
