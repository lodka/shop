import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {CartComponent} from './components/cart-component/cart.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [CartItemComponent, CartComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule {
}
