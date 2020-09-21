import { Directive } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {
  
  
    constructor(private element: ElementRef, private render : Renderer2) { }
    @HostListener('keyup')
    myFunc()
    {
      var phone:string;
      phone= this.element.nativeElement.value;
      var isNumbere=true;
      isNumbere=/^[0-9]+$/.test(phone);
      if(!isNumbere){
        this.render.setProperty(this.element.nativeElement,"value",phone.substring(0,phone.length-1))
      }
      if(phone.length>9)
      {
          this.render.setProperty(this.element.nativeElement,"value",phone.substring(0,9));
      }
    }
  } 
  

