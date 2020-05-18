import {Injectable} from '@angular/core';
import {Product} from '../../product/models/product.model';
import {ProductService} from '../../product/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private productService: ProductService) {
  }

  get getProductsCount(): number {
    return this.productService.getBoughtProducts().length;
  }

  get getProductsPrice(): number {
    return this.productService.getBoughtProducts().reduce<number>((sum, product): number => {
      return sum + product.price;
    }, 0);
  }

  get getProducts(): Product[] {
    return this.productService.getBoughtProducts();
  }
}
