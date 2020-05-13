import { Injectable } from '@angular/core';
import {Product} from '../../product/models/product.model';
import {ProductService} from '../../product/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsList: Product[];

  constructor(private productService: ProductService) { }

  // Я рекомендую приватные методы опускать ниже, а публичные выше.
  // Публичные методы  - это API компонента. Если они вызывают какие-то приватные методы
  // и интересует их бизнес логика, то тогда можно прокрутить ниже и смотреть их.
  // Думаю, так удобнее. Хотя не очень понятно, зачем тут этот приватные метод.
  private loadProductsList(): void {
    this.productsList = this.productService.getProducts();
  }

  getProducts(): Product[]{
    this.loadProductsList();
    return this.productsList;
  }
}
