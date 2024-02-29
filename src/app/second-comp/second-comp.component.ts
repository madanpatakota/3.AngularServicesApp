import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css'],
  providers:[]
})
export class SecondCompComponent implements OnInit {
  //company = { Name : "Misard.com" , industry : "IT"};

  // Creating the EmployeeList Variable and that Variable should be accept the data in the format of Employee Array
  EmployeesList: Employee[] = [];

  //So here you are adding the dependencies of the component...
  // As of now here employeeService is the dependency . you can create the multiple dependencies.
  // When you are adding the service dependency into the component . then you should give the instruction to the angular compiler that in the format of provider

  // Another dependency Router (We will disuss in the next section)
  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {
    // Here Creating the reference of the EmployeeService and then based on that reference we are calling the getEmployeeList
    //var employeeService = new EmployeeService();
    this.EmployeesList = this.employeeService.getEmployeeList();
  }



  sendEmployeeDetails(employee:Employee){
    this.employeeService.getLatestNotifications(employee.City , "Second Component");
  }
}
