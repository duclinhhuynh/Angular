import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input() appHighLight = 'blue';
  constructor(private el: ElementRef) {
    console.log('contructor HightLightDirective', this.appHighLight);
    el.nativeElement.style.color = this.appHighLight;
   }
   ngOninit(): void {
    console.log('ngOninit HighLightDirective', this.appHighLight);
   }
}
