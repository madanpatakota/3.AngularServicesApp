import { Component , OnInit } from '@angular/core';
import { CompanyService  } from './company.service';
import { InfoServie } from './info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  //providers : []
  providers:[CompanyService , InfoServie]   // when you give the injectable you no need to give the provider . angular by default create the instance for that.
})
export class AppComponent implements OnInit {
  title = 'AngularServicesApp';
  
  constructor(public companyService : CompanyService , public infoService : InfoServie){
  }


  allCompaniesDetails:any = [];

  latestCompanyName = "";
  ngOnInit(): void {
    this.companyService.eventEmitter.subscribe((value)=>{
     console.log("Data in appcomponent level" , value);
     this.allCompaniesDetails.push(value);
    })

    this.infoService.eventemitter.subscribe((value)=>{
     this.latestCompanyName = value;

    });


  }

  



  







}
