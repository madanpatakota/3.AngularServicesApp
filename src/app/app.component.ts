import { Component , OnInit } from '@angular/core';
import { CompanyService  } from './company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CompanyService]
})
export class AppComponent implements OnInit {
  title = 'AngularServicesApp';
  
  constructor(public companyService : CompanyService){
  }


  allCompaniesDetails:any = [];
  ngOnInit(): void {
    this.companyService.eventEmitter.subscribe((value)=>{
     console.log("Data in appcomponent level" , value);
     this.allCompaniesDetails.push(value);
    })
  }

  



  







}
