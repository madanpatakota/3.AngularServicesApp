import { EventEmitter, Injectable } from "@angular/core";

@Injectable({providedIn:"root"})
export class NotificationService {


  
  constructor(){
    
     
    //Emitting the colors by using the notification service
    //this.componentNamesEventEmitter.emit(["Blue" , "Grey" , "Yellow"]);
    
  }
 
  //Handle the messages which we want to display
  LatestNotification(message: string, componentName: string): any {
    let datetime = new Date();

    //Update the message.
    return  `You have posted ${message} City from ${componentName} on ${datetime.getDate()}-${ datetime.getMonth() + 1 }-${datetime.getFullYear()}`;
  }

  //-----------------------------------------------------
  
  componentNamesEventEmitter  = new EventEmitter<string[]>();
  
  // printColors(){
  //   //So whenever this constructor loaded this eventemitter having he component colors
  //   this.componentNamesEventEmitter.emit(this.componentNames);
  // }
}
