import { Component, ElementRef, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { CityService } from '../city.service';
import { City } from '../city.model';
import { NotificationService } from '../notification.service';
declare var bootstrap: any;

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css'],
  providers: [CityService],
})
export class FirstCompComponent implements OnInit {
  //company = { Name : "Misard.com" , industry : "IT"};

  // Creating the EmployeeList Variable and that Variable should be accept the data in the format of Employee Array
  EmployeesList: Employee[] = [];
  CityList: City[] = [];
  OriginalEmployeeList: Employee[] = [];

  cityValue = '';
  componentName = '';

  //So here you are adding the dependencies of the component...
  // As of now here employeeService is the dependency . you can create the multiple dependencies.
  // When you are adding the service dependency into the component . then you should give the instruction to the angular compiler that in the format of provider

  // Another dependency Router (We will disuss in the next section)
  constructor(
    public employeeService: EmployeeService,
    public cityService: CityService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    // Here Creating the reference of the EmployeeService and then based on that reference we are calling the getEmployeeList
    //var employeeService = new EmployeeService();
    this.EmployeesList = this.employeeService.getEmployeeList();

    //slice() method here useful for not overrided the original values.
    this.OriginalEmployeeList = this.EmployeesList.slice();
    this.CityList = this.cityService.getCityList();


    //Subscribing the componentNamesEventEmitter for componentNames
    this.notificationService.componentNamesEventEmitter.subscribe(
      (componentNames) => {
        this.componentName = componentNames[0];
      }
    );
  }

  filterByCity(cityDetailsElement: any) {
    console.log(cityDetailsElement);

    let cityValue = cityDetailsElement.value;
    let city = this.CityList.find((x) => x.CityID == parseInt(cityValue));

    //? incase if city having the details then it calls CityName Property incase city do't have details it would't call CityName property
    this.EmployeesList = this.OriginalEmployeeList.filter(
      (x) => x.City == city?.CityName
    );
  }

  btnFilterByCity(cityValue: string) {
    //console.log(cityValue);

    let city = this.CityList.find((x) => x.CityID == parseInt(cityValue));
    //? incase if city having the details then it calls CityName Property incase city do't have details it would't call CityName property
    this.EmployeesList = this.OriginalEmployeeList.filter(
      (x) => x.City == city?.CityName
    );
  }

  message = '';
  btnPostMessage() {
    this.employeeService.getLatestNotifications(
      this.message,
      'First Component'
    );
  }
}
