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
    @Output() onUpdateQuantity = new EventEmitter();

  constructor (){}
    ngOnInit(){

    }

    removeProduct(productId: number){
      this.onRemove.emit(productId)

    }

    // updateQuantity(element){
    //   console.log(element.value)
    // }
    // onRemove(){
    //   alert('remove?')
    // }
    inputQuantity(id: number, inputElement: HTMLInputElement) {
      const value = inputElement.value;
      const intValue = parseInt(value);

      if (intValue < 1) {
        inputElement.value = -intValue + '';
      } else if (value.length > 2) {
        inputElement.value = value.slice(0, 2);
      }

      this.onUpdateQuantity.emit({ id, quantity: parseInt(inputElement.value) || '' });
  }


}
