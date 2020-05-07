import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../shared/categories.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @Input()
  public shops: Array<string>;

  public name: string;
  public description: string;
  public price: number;
  public category: Category;
  private isAvailable: boolean;

  constructor() {
    this.name = 'Steak';
    this.description = 'Beautiful peace of most cared pig in all Kyiv region';
    this.price = 3483;
    this.category = Category.Meat;
    this.isAvailable = true;
  }

  ngOnInit(): void {
  }

  doIAvaliable(): string {
    return this.isAvailable ? `I'm avaliable :)` : `I'm not avaliable :(`;
  }
}
