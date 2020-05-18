import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';
import {Category} from '../../shared/models/categories.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsList: Array<Product>;

  constructor() {
    this.productsList = [
      new Product('Lg', 'TV', 15, Category.Electronics, true),
      new Product('Samsung', 'SSD', 5, Category.Electronics, true),
      new Product('Apple', 'Phone', 40, Category.Electronics, true),
      new Product('Electron', 'Bus', 30, Category.Electronics, false),
      new Product('Sony', 'SonyPlaystation', 20, Category.Electronics, true)
    ];
  }

  getNotBoughtProducts(): Array<Product> {
    return this.productsList.filter(product => !product.isBought);
  }

  getBoughtProducts(): Product[] {
    return this.productsList.filter(product => product.isBought);
  }
}
