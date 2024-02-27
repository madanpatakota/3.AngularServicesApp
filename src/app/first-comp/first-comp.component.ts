import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css'],
})
export class FirstCompComponent implements OnInit{
  //company = { Name : "Misard.com" , industry : "IT"};

  // Creating the EmployeeList Variable and that Variable should be accept the data in the format of Employee Array
  EmployeesList:Employee[] = [];


  ngOnInit(): void {
     // Here Creating the reference of the EmployeeService and then based on that reference we are calling the getEmployeeList
     var employeeService = new EmployeeService();
     this.EmployeesList = employeeService.getEmployeeList();
  }
  









}
