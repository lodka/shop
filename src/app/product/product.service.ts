import {Injectable} from '@angular/core';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {
  }

  getProducts(): Array<Product>{
    return [
      new Product(1, 'Lg', 'TV', 15, false),
      new Product(2, 'Samsung', 'SSD', 5, false),
      new Product(3, 'Apple', 'Phone', 40, true),
      new Product(4, 'Electron', 'Bus', 30, false),
      new Product(5, 'Sony', 'SonyPlaystation', 20, false),
    ]
  }
}
