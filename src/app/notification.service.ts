import { Injectable } from "@angular/core";

//@Injectable({providedIn:"root"})
export class NotificationService {
 
  //Handle the messages which we want to display
  LatestNotification(message: string, componentName: string): any {
    let datetime = new Date();

    //Update the message.
    return  `You have posted ${message} City from ${componentName} on ${datetime.getDate()}-${ datetime.getMonth() + 1 }-${datetime.getFullYear()}`;
  }
}
