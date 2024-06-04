import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fetListen]'
})

export class ListenDirective {

  constructor(private element: ElementRef, private renderer : Renderer2) { }

  @HostListener('mouseenter') testOver(){
    this.renderer.addClass(this.element.nativeElement, 'enlarge')
  }
 
  @HostListener('mouseout') testOut(){
    this.renderer.removeClass(this.element.nativeElement, 'enlarge')
  }

}
