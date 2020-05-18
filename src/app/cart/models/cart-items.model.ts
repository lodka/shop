import {Product} from '../../product/models/product.model';

export interface CartItems {
  products: Product[];
  totalCount: number;
  totalPrice: number;
}
