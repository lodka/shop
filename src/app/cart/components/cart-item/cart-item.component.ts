import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Product} from '../../../product/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  styles: [`.navyColor {
    color: navy
  }`]
})
export class CartItemComponent {
  @Input() product: Product;

  @ViewChild('buttonElement') button: ElementRef<HTMLButtonElement>;

  constructor() {
  }

  removeItem(): void {
    this.product.isAvailable = false;
  }
}
