import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-third-comp',
  templateUrl: './third-comp.component.html',
  styleUrls: ['./third-comp.component.css']
})
export class ThirdCompComponent implements OnInit {
  EmployeesList:Employee[] = [];


  ngOnInit(): void {
     // Here Creating the reference of the EmployeeService and then based on that reference we are calling the getEmployeeList
     var employeeService = new EmployeeService();
     this.EmployeesList = employeeService.getEmployeeList();
  }
}
