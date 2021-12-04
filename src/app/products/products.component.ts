import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
   @Input() products: any;
  @Output() onRemove = new EventEmitter();
  constructor (){}
    ngOnInit(){

    }
    removeProduct(productId: number): void{
      this.onRemove.emit(productId)

    }
    // updateQuantity(element){
    //   console.log(element.value)
    // }
    // onRemove(){
    //   alert('remove?')
    // }

}
