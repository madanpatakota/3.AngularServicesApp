import { Component } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css'],
  providers : [CompanyService]    
  // Useful create the instance of the class. and tell to the angular hey use this as a service .. if you add any class in providers angular treat them as a service and create the instance for that
})
export class FirstCompComponent {
    

     company = { Name : "" , industry : ""};

     //constructor is a speical method which automatically loaded once class has loaded.
     //refer the JS classes for more info...

     // We can pass the parameters to the constructor.
     // Check course how we pass the parameter to the constructor.
     constructor(public _companyService : CompanyService){
        //this.company = { Name : "Misard.com" , industry : "IT"};

        //this way we can create the instance and refer to the variable
        //var companyService = new CompanyService();

        this.company = _companyService.getCompanyDetails();

     }

     updateCompanyName = "";

     evtFirstGet(){
      this.updateCompanyName = this._companyService.getCompanyUpdateName("MisardFirst.com");
     }
     
}
