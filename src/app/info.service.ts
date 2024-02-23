
import {  EventEmitter , Injectable } from '@angular/core'


@Injectable({providedIn:'root'})
//Or you can register into the appmodule ts file also.
export class InfoServie{
  
  
   eventemitter = new EventEmitter<any>();


   /*it will take the data and upload that inot eventemitter . if any one subscribe then they will get the updates */

    receivedData(data : string){
       this.eventemitter.emit(data);
    }


}