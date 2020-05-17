import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class CartHoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  @HostBinding('style.fontStyle') get getFontWeight() {
    return 'italic';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackground('cyan');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackground('white');
  }

  private changeBackground(color: string) {
    this.renderer.setStyle(this.element.nativeElement, 'background', color);
  }
}
