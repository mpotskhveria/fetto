import { Component, OnInit, ViewChild } from '@angular/core';
import { product as item } from './product';
import { ProductsService } from '../services/products.service';
import { BehaviorSubject, Observable, Subject, fromEvent } from 'rxjs';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'fet-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  username: string = '';
  
  products: item[] = []

  a:string = ''
  b:string = ''

  constructor (private prodsvc : ProductsService, private activeRoute : ActivatedRoute) {}

  loger(item: any):void{
    console.log(item)
  }

  
  selectedChange: string = 'all';

  parentFilter(data: string){
    this.selectedChange = data
  }



  observable$ = fromEvent(document, 'click');

  // testObs$ = new Observable<number>((x)=>{
  //   x.next(Math.random())
  // })

  testObs$ = new Subject<any>()
  


  ngOnInit(){

    // this.testObs$.subscribe({
    //   next: (data)=> { console.log(data)}
    // })

    // this.testObs$.subscribe({
    //   next: (data)=> { console.log(data)}
    // })

    this.testObs$.next(Math.random())
    

    this.prodsvc.getProducts()

    this.prodsvc.product$.subscribe((data : any)=>{
      this.products = data
    })

    this.activeRoute.fragment.subscribe((data)=> {
      this.scroller(data)
    })


    // this.prodsvc.test$.subscribe({
    //   next: (data) => { console.log(data) }
    // })

  }

  scroller(item: any){
    document.getElementById(item)?.scrollIntoView({behavior: 'smooth'})
  }

  signin(a:string,b:string ){
    this.prodsvc.login(a,b).subscribe({
      next(response){console.log(response.token)},
      error(err){console.log(err.message)}
    })
  }




}

