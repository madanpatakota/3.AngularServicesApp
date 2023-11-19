

// creating the CompanyService class 
// Added the one method i.e. getCompanyDetails/
// Responsibility of the getCompanyDetails is returns the company related data.

import { EventEmitter } from "@angular/core";


export class CompanyService {
  
  getCompanyDetails(): any {
    var company = { Name: 'Misard.com', industry: 'IT' };
    return company;
  }

  eventEmitter = new EventEmitter<any>();

  getCompanyUpdates(companyName:string){
     this.eventEmitter.emit(companyName);
  }

  getCompanyUpdateName(companyName:string){
       return companyName;
  }




}
