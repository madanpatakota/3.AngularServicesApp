

// creating the CompanyService class 
// Added the one method i.e. getCompanyDetails/
// Responsibility of the getCompanyDetails is returns the company related data.


export class CompanyService {
  getCompanyDetails(): any {
    var company = { Name: 'Misard.com', industry: 'IT' };
    return company;
  }
}
