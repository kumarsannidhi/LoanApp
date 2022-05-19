export class Loan {
    constructor(

        public loanId:number,

        public loanCustomerName:string,

        public loanAmount:number,

        public dateOfLoan:Date,

        public tenure:number,

        public rateOfInterest:number,



    )

   {}

   public computeInterestAmount(){

      return this.rateOfInterest*this.loanAmount*this.tenure;



   }

   public computeEMI(){

       return this



   }
}
