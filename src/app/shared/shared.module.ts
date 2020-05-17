import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartHoverDirective} from './cart-hover.directive';


@NgModule({
  declarations: [CartHoverDirective],
  imports: [
    CommonModule
  ],
  exports: [
    CartHoverDirective
  ]
})
export class SharedModule {
}
