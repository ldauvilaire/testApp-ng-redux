import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[appHighlight], input' })
/** Highlight the attached element or an InputElement in gray */
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'lightgray';
    console.log(
      `* Shared highlight called for ${el.nativeElement.tagName}`);
  }
}
