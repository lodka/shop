import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductModule} from './product/product.module';
import { FirstComponent } from './first/components/first-component/first.component';
import {CartComponent} from './cart/components/cart-component/cart.component';
import {CartService} from './cart/services/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
