import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fetBind]'
})

export class BindDirective {

  constructor( private item: ElementRef, private batman: Renderer2 ) { }

  @HostBinding('style.backgroundColor') background: string = 'white';

  @HostListener('mouseenter') testOver(){
    this.batman.addClass(this.item.nativeElement, 'enlarge')
  }
 
  @HostListener('mouseout') testOut(){
    this.batman.removeClass(this.item.nativeElement, 'enlarge')
  }


}
