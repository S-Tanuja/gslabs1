import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { 
    // element.nativeElement.style.backgroundcolor('bisque');
  }


@HostBinding('style.background')bg:string='';
@HostBinding('style.transition')tr:string='';

@HostListener('mouseenter')mouseEnter(){
  // this.renderer.setStyle(this.element.nativeElement,'backgroundColor','bisque');

      this.bg = 'bisque';
      
}
@HostListener('mouseleave')mouseLeave(){
  this.bg='#ececec';
  this.tr='1.0s';

}
}
