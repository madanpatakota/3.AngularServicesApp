import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent implements OnInit {
  EmployeesList:Employee[] = [];


  ngOnInit(): void {
     // Here Creating the reference of the EmployeeService and then based on that reference we are calling the getEmployeeList
     var employeeService = new EmployeeService();
     this.EmployeesList = employeeService.getEmployeeList();
  }
}
