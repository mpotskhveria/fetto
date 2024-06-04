import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { product } from '../home/product';
import { LogerService } from '../services/loger.service';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'fet-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],

})


export class CatalogComponent {

 @Input() saqoneli: product[] = [];
 @Input() selected: string = ''

 imager(item:any){
  return '/assets/images/' + item.img
}

constructor( private loger: LogerService ){}

placedOrders: product[] = [];

placeAnOrder(item: product){
  this.placedOrders.push(item)
}

@ViewChild('textOrder') requestOrder!: ElementRef;

loger1(){
  console.log(this.requestOrder.nativeElement.value)
}

testSvc(){
  console.log(this.loger.loger())
}

testDate: Date = new Date()

total:number = 5

observable$: Observable<any> = of('Hello').pipe( delay(1000) )

}
