import { Component } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-third-comp',
  templateUrl: './third-comp.component.html',
  styleUrls: ['./third-comp.component.css']
})
export class ThirdCompComponent {
  
  company = { Name : "" , industry : ""};
  constructor(){
    //this.company = { Name : "Misard.com" , industry : "IT"};

    //this way we can create the instance and refer to the variable
    var companyService = new CompanyService();


    this.company = new CompanyService().getCompanyDetails();

 }
     
}
