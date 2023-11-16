import { Component } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css'],
  providers : [CompanyService]    
  // Useful create the instance of the class. and tell to the angular hey use this as a service .. if you add any class in providers angular treat them as a service and create the instance for that
})
export class SecondCompComponent {
  //company = { Name : "Misard.com" , industry : "IT"};
  
  company = { Name : "" , industry : ""};

 constructor(private _companyService:CompanyService){
    //this.company = { Name : "Misard.com" , industry : "IT"};
    //var companyService = new CompanyService();
    this.company = _companyService.getCompanyDetails();

 }
     
}
