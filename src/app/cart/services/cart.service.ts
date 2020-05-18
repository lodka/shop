import {Injectable} from '@angular/core';
import {Product} from '../../product/models/product.model';
import {ProductService} from '../../product/services/product.service';
import {CartItems} from '../models/cart-items.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsList: Product[];

  constructor(private productService: ProductService) {
  }

  calcCartItems(): CartItems {
    this.productsList = this.productService.getProducts();

    const cartProducts = this.productsList.filter(product => product.isAvailable);
    return {
      products: cartProducts,
      totalCount: cartProducts.length,
      totalPrice: cartProducts.reduce<number>((sum, product): number => {
        return sum + product.price;
      }, 0)
    };
  }
}
