import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})


export class LogerService {

   testProperty = 12;
    
    loger(){
        return this.testProperty
    }

}