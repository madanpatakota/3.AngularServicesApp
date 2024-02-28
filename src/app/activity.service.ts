import { Injectable } from "@angular/core";

//@Injectable({providedIn:"root"})
export class ActivityService {
 
  //Handle the messages which we want to display
  getActivity(message: string, componentName: string): any {
    let datetime = new Date();
    return `${message} ${componentName} ${datetime.getDate()}-${
      datetime.getMonth() + 1
    }-${datetime.getFullYear()}`;
  }
}
