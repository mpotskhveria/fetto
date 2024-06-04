import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'fet-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent {

  list: any

  constructor(private products : ProductsService) {}

  imager(item:any){
    return '/assets/images/' + item.img
  }

  ngOnInit(){
    this.products.product$.subscribe((data) => {
      this.list = data
    })
  }

}
