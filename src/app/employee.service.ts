import { Employee } from './employee.model';

export class EmployeeService {
  private employees: Employee[] = [
    // Add other employees here
    // Total 9 records of Employees and their details are in the format of EmployeeID , FullName , City , PostalCode and Country
    {
      EmployeeID: 1,
      FullName: 'NancyDavolio',
      City: 'Seattle',
      PostalCode: '98122',
      Country: 'USA',
    },
    {
      EmployeeID: 2,
      FullName: 'AndrewFuller',
      City: 'Tacoma',
      PostalCode: '98401',
      Country: 'USA',
    },
    {
      EmployeeID: 3,
      FullName: 'JanetLeverling',
      City: 'Kirkland',
      PostalCode: '98033',
      Country: 'USA',
    },
    {
      EmployeeID: 4,
      FullName: 'MargaretPeacock',
      City: 'Redmond',
      PostalCode: '98052',
      Country: 'USA',
    },
    {
      EmployeeID: 5,
      FullName: 'StevenBuchanan',
      City: 'London',
      PostalCode: 'SW1 8JR',
      Country: 'UK',
    },
    {
      EmployeeID: 6,
      FullName: 'MichaelSuyama',
      City: 'London',
      PostalCode: 'EC2 7JR',
      Country: 'UK',
    },
    {
      EmployeeID: 7,
      FullName: 'RobertKing',
      City: 'London',
      PostalCode: 'RG1 9SP',
      Country: 'UK',
    },
    {
      EmployeeID: 8,
      FullName: 'LauraCallahan',
      City: 'Seattle',
      PostalCode: '98105',
      Country: 'USA',
    },
    {
      EmployeeID: 9,
      FullName: 'AnneDodsworth',
      City: 'London',
      PostalCode: 'WG2 7LT',
      Country: 'UK',
    },
  ];

  constructor() {}

  getEmployeeList(): Employee[] {
    return this.employees;
  }
}