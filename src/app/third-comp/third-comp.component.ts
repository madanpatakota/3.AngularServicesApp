import { Component } from '@angular/core';

@Component({
  selector: 'app-third-comp',
  templateUrl: './third-comp.component.html',
  styleUrls: ['./third-comp.component.css']
})
export class ThirdCompComponent {
  company = { Name : "Misard.com" , industry : "IT"};
     
}
