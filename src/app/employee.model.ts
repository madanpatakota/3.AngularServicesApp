export class Employee {
  EmployeeID: number;
  FullName : string;
  City: string;
  PostalCode: string;
  Country: string;

  constructor(
    EmployeeID: number,
    FullName: string,
    City: string,
    PostalCode: string,
    Country: string
  ) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.City = City;
    this.PostalCode = PostalCode;
    this.Country = Country;
  }
}
