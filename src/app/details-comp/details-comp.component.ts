import { Component , OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-details-comp',
  templateUrl: './details-comp.component.html',
  styleUrls: ['./details-comp.component.css']
})
export class DetailsComponent implements OnInit {

  allCompaniesDetails:any = [];

  constructor(public companyService : CompanyService){

  }

  ngOnInit(): void {
    this.companyService.eventEmitter.subscribe((value)=>{
     console.log("Data in logComponent level" , value);
     this.allCompaniesDetails.push(value);
    })
  }

}
