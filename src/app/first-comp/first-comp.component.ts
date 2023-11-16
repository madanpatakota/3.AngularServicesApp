import { Component } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent {
    

     company = { Name : "" , industry : ""};

     //constructor is a speical method which automatically loaded once class has loaded.
     //refer the JS classes for more info...

     constructor(){
        //this.company = { Name : "Misard.com" , industry : "IT"};

        //this way we can create the instance and refer to the variable
        var companyService = new CompanyService();
        
        this.company = new CompanyService().getCompanyDetails();

     }
     
}
