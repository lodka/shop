import {Category} from '../../shared/categories.enum';

export class Product {
  constructor(
    public id: number = null,
    public name: string,
    public description: string,
    public price: number,
    public category: Category,
    public isAvailable: boolean
  ) {
  }
}
