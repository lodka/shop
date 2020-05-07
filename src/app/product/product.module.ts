import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductComponentComponent} from './components/product-component/product-component.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ProductComponentComponent,
    ProductListComponent,
  ],
  exports: [
    ProductComponentComponent,
    ProductListComponent,
  ],
})
export class ProductModule { }
