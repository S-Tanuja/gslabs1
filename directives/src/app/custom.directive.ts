import { Directive, ElementRef } from '@angular/core';
import { Renderer2,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el:ElementRef, private ren:Renderer2) {
    el.nativeElement.style.color='white';
    el.nativeElement.style.backgroundColor='black';

    this.ren.setStyle(this.el.nativeElement,'font-style','italic');
    this.ren.setStyle(this.el.nativeElement,'text-align','center');



  
   }

 

}


