import { Injectable } from '@angular/core';
import {Product} from '../../product/models/product.model';
import {ProductService} from '../../product/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsList: Product[];

  constructor(private productService: ProductService) { }

  private loadProductsList(): void {
    this.productsList = this.productService.getProducts();
  }

  getProducts(): Product[]{
    this.loadProductsList();
    return this.productsList;
  }
}
