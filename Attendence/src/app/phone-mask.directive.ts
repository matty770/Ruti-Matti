import { Directive,ElementRef,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {

  constructor(private element: ElementRef, private render: Renderer2) { }
  @HostListener('keyup') 
  fun()
  {
    var str: string;
    str = this.element.nativeElement.value;
    var isNumber = /^[0-9]+$/.test(str);
    if (!isNumber)
    {
      this.render.setProperty(this.element.nativeElement,
         "value", str.substring(0, str.length - 1));
    }
    if (str.length > 9)
    {
      this.render.setProperty(this.element.nativeElement
        , "value", str.substring(0, 9));
    } 
    
  }

}
