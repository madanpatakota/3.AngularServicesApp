import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularServicesApp';

  constructor(private employeeService: EmployeeService , private notificationService : NotificationService) {
   
  }

  isShowNotification = false;
  notificationMessage = '';

  
  ngOnInit(): void {
    this.employeeService.notificationEmitter.subscribe((data) => {
      console.log('Notification message is ', data);
      this.notificationMessage = data;
      this.isShowNotification = true;
    });


    // We are make setInterval after the 5 seconds
    setInterval(() => {
      this.notificationMessage = '';
      this.isShowNotification = false;
    }, 5000);

  }


  btnClick(){
    // //Emitting the columns by using the notification service
   
    let componentNames = [ "FullName" , "City" , "PostalCode , Country"];
     this.notificationService.componentNamesEventEmitter.emit(componentNames)
  }
}
