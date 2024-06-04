import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class ProductsService {

  link = 'https://dummyjson.com/auth/login'

  private subject = new Subject<any>()
  product$ = this.subject.asObservable()

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<any>('https://dummyjson.com/products').pipe(
      map((response)=>{
        if(response){
          return response.products.map((product:any)=> {
            return{...product, title:product.title.toUpperCase()}
          })
        }
      })
    ).subscribe({
      next: (data) => this.subject.next(data),
      error: (err) => this.subject.error(err)
    })
  }

  login(user:string, paroli:string): Observable<any>{

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    const body = {
      username:user,
      password: paroli
    }

    return this.http.post<any>(this.link, body, {headers})
  }

  products = [
    // {
    //   id: 1,
    //   name: 'Georgian Wine',
    //   category: 'food',
    //   price: 100,
    //   img: 'test.webp',
    //   available:true
    // },

    // {
    //   id: 2,
    //   name: 'GeoPhone',
    //   category: 'tec',
    //   price: 500,
    //   img: 'phone.webp',
    //   available:false
    // },

    // {
    //   id: 3,
    //   name: 'GeoOil',
    //   category: 'oil',
    //   price: 15,
    //   img: 'oil.jpg',
    //   available:true
    // },

    // {
    //   id: 4,
    //   name: 'GeoBread',
    //   category: 'food',
    //   price: 50,
    //   img: 'bread.jpg',
    //   available:false
    // },

    // {
    //   id: 5,
    //   name: 'GeoCheese',
    //   category: 'food',
    //   price: 250,
    //   img: 'cheese.webp',
    //   available:true
    // }

  ]

  test$ = new Observable((observer) => {
    observer.next(this.products)
  })

  
  
  

}
