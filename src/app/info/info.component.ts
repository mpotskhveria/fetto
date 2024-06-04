import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fet-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  product: any
  productID: any

  constructor(private items: ProductsService, private activeLink : ActivatedRoute){}


  ngOnInit(){
    this.activeLink.params.subscribe((data)=>{
      this.productID = +data['id']
      this.product = this.items.products.find((item: any)=> item.id === this.productID)
    })
    
    console.log(this.product)
  }

  
  imager(item:any){
    return '/assets/images/' + item.img
  }
}
