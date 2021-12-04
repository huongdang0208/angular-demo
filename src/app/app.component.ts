import { Component } from '@angular/core';
import {Product} from './product.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    let numberItems: number
  }
  title = 'angular-prj';
   products: Product[] =[
    {
      id: 1,
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      thumnail: 'https://via.placeholder.com/200x150',
      price: 5.99,
      quantity: 2,
    },
    {
      id: 2,
      name: 'PRODUCT ITEM NUMBER 2',
      description: ' Description for product item number 2',
      thumnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 1,
    },
    {
      id: 3,
      name: 'PRODUCT ITEM NUMBER 2',
      description: ' Description for product item number 2',
      thumnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 1,
    }

  ];
  numberItems = 5;
  removeProduct(productId: number){
    // alert('k')
      const index=this.products.findIndex(product=> product.id===productId)
      this.products.splice(index,1);
      // tinh lai tong tien va san pham
      // this.updateCartSummary()
  }
  // cap nhat so luong san pham
  updateProductQuantity(data: {id: number; quantity: number}) {
    const item= this.products.find(product => product.id === data.id);
    if(item) {
      item.quantity= data.quantity || 0
    }
    // tinh lai tong tien
    //this.updateCartSummary()
  }





}
