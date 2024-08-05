//@ts-check;

export interface User {
    userId : string;
    name: string;
    address : string;
    email? : string;
    phoneNumber : string;
    role : 'lender' | 'borrower';
    dateRegistered : string;
}

export interface Loan {
    loanId: string;
    amount : number;
    interestRate : number;
    startDate : string;
    endDate : string;
    lender : User;
    borrower: User;
    terms : number;
    transactions : MonthlyPayment[];
}
export interface MonthlyPayment {
    paymentId: string;
    loanId:string;
    amount : number;
    status : 'pending' | 'paid';
    paymentDate : string;
    dueDate : string;
    reportDate : 'inactive' | 'active'
}