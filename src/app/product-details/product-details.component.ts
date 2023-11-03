import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  //^sends data into this we now have the products list here 
  @Output() buy = new EventEmitter()

  getImageUrl(product: IProduct){
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

 buyButtonClicked(product: IProduct){
  this.buy.emit();
  
  }

}
