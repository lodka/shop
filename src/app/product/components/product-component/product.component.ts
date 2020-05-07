import {Component} from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  onBuy() {
    console.log('You bought this product!');
  }

}
