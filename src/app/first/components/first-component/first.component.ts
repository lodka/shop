import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../shared/categories.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  @Input()
  shops: Array<string>;

  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;

  constructor() {
    this.name = 'Steak';
    this.description = 'Beautiful peace of most cared pig in all Kyiv region';
    this.price = 3483;
    this.category = Category.Meat;
    this.isAvailable = true;
  }
}
