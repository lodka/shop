import {Category} from '../../shared/models/categories.enum';

export class Product {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public category: Category,
    public isAvailable: boolean,
    public isBought?: boolean
  ) {
    this.isBought = false;
  }
}
