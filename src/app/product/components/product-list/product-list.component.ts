import {Component} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(private productService: ProductService) {
  }

  get Products(): Product[] {
    return this.productService.getNotBoughtProducts();
  }
}
