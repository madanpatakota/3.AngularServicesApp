

// creating the CompanyService class 
// Added the one method i.e. getCompanyDetails/
// Responsibility of the getCompanyDetails is returns the company related data.

import { EventEmitter , Injectable } from "@angular/core";

@Injectable()
export class CompanyService {

  constructor(){

  }
  
  getCompanyDetails(): any {
    var company = { Name: 'Misard.com', industry: 'IT' };
    return company;
  }

  eventEmitter = new EventEmitter<string>();

  postCompanyUpdates(companyName:string){
     this.eventEmitter.emit(companyName);
  }

  getCompanyUpdateName(companyName:string){
       return companyName;
  }




}
