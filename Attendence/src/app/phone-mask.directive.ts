import { Directive,ElementRef,Renderer2,HostListener } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Directive({
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {

  constructor(private element: ElementRef, private render: Renderer2) { }
  //@Input('appPhoneMask')
 
  @HostListener('keyup') 
  onkeyup()
  {
  var  str: string;
    str = this.element.nativeElement.value;
    var isNumber = /^[0-9]+$/.test(str);
    if (!isNumber)
    {
      this.render.setProperty(this.element.nativeElement,
         "value", str.substring(0,str.length - 1));
    }
    if (str.length > 9)
    {
     this.render.setProperty(this.element.nativeElement
       , "value", str.substring(0, 9));
    } 
 
  }
  @HostListener('keydown')
  keydown()
  {
    var  str: string;
    str = this.element.nativeElement.value;
    if(str.length<9)
    {
      alert("מס' הטלפון אינו חוקי");
    }
  }




}
