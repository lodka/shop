import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductComponent} from './components/product-component/product.component';
import {ProductService} from './services/product.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
  ],
  providers: [],
  exports: [
    // ProductComponent, // не надо делать публичным, он используется только внутри ProductListComponent
    ProductListComponent,
  ],
})
export class ProductModule { }
