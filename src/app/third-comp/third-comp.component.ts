import { Component } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-third-comp',
  templateUrl: './third-comp.component.html',
  styleUrls: ['./third-comp.component.css'],
  providers:[CompanyService]
})
export class ThirdCompComponent {
  
  company = { Name : "" , industry : ""};
  constructor(public _companyService : CompanyService){
    //this.company = { Name : "Misard.com" , industry : "IT"};
    //this way we can create the instance and refer to the variable
    var companyService = new CompanyService();
    this.company = _companyService.getCompanyDetails();

 }


 


     
}
