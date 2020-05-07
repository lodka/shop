import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';
import {Category} from '../../shared/categories.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsList: Array<Product>;

  constructor() {
    this.productsList = [
      new Product(1, 'Lg', 'TV', 15, Category.Electronics, false),
      new Product(2, 'Samsung', 'SSD', 5, Category.Electronics, false),
      new Product(3, 'Apple', 'Phone', 40, Category.Electronics, true),
      new Product(4, 'Electron', 'Bus', 30, Category.Electronics, false),
      new Product(5, 'Sony', 'SonyPlaystation', 20, Category.Electronics, true)
    ];
  }

  getProducts(): Array<Product> {
    return this.productsList;
  }
}
