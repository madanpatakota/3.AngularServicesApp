import { Component } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent {
  //company = { Name : "Misard.com" , industry : "IT"};
  
  company = { Name : "" , industry : ""};

 constructor(){
    //this.company = { Name : "Misard.com" , industry : "IT"};
    //var companyService = new CompanyService();
    this.company = new CompanyService().getCompanyDetails();
 }
     
}
