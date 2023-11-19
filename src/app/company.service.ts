

// creating the CompanyService class 
// Added the one method i.e. getCompanyDetails/
// Responsibility of the getCompanyDetails is returns the company related data.

import { EventEmitter , Injectable } from "@angular/core";
import { InfoServie } from "./info.service";

@Injectable({providedIn:'root'})
export class CompanyService {

  constructor(private infoService : InfoServie){

  }
  
  getCompanyDetails(): any {
    var company = { Name: 'Misard.com', industry: 'IT' };
    return company;
  }

  eventEmitter = new EventEmitter<string>();

  postCompanyUpdates(companyName:string){
     this.eventEmitter.emit(companyName);
     this.infoService.receivedData(companyName);
  }

  getCompanyUpdateName(companyName:string){
       return companyName;
  }




}
