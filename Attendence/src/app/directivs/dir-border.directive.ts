import {  Directive,HostListener,ElementRef,Input,Renderer2,HostBinding} from '@angular/core';

@Directive({
  selector: '[appDirBorder]'
})
export class DirBorderDirective {

  @Input('appDirBorder') highlightColor: string;
  constructor(private element: ElementRef,private render: Renderer2) { }
  @HostListener('keypress')
  myFunc() {
    this.render.setStyle(this.element.nativeElement, "borderColor", "red");
  }

}
