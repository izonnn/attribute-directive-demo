import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRandomHighlight]'
})
export class RandomHighlightDirective implements OnInit {

  // Create list of all classes we created in the app component css styles.
  colorsList = ['yellow', 'red', 'blue', 'purple', 'green'];

  // Inject renderer2 for manipulate the element.
  // Inject elementRef for getting access to the element which the directive is on.
  constructor(private renderer2: Renderer2, private elementRef: ElementRef) { }

  ngOnInit() {
    // Adding random class name to each element.
    this.renderer2.addClass(this.elementRef.nativeElement, this.getRandomColor());
  }

  // Helper for pick random class name from the list.
  getRandomColor() {
    return this.colorsList[Math.floor(Math.random() * this.colorsList.length)];
  }
}
