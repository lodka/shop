import {Component, OnInit} from '@angular/core';
import {Product} from '../../product.model';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Array<Product>
  constructor(private listProducts: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.listProducts.getProducts();
  }

}
