import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements AfterViewInit {
  @Input() product: Product;

  @ViewChild('button') button: ElementRef<HTMLButtonElement>;

  onBuy() {
    this.product.isBought = true;
  }

  ngAfterViewInit(): void {
    // Можно, но не нужно так делать. Лучше в шаблоне добавить атрибут [disabled]="!product.isAvailable"
    if (!this.product.isAvailable) {
      this.button.nativeElement.disabled = true;
    }
  }

}
