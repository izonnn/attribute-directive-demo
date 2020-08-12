import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // Create list and use the directive.
  template: `
    <ul>
      <li appRandomHighlight>One thing</li>
      <li appRandomHighlight>Second thing</li>
      <li appRandomHighlight>Third thing</li>
      <li appRandomHighlight>Tourth thing</li>
    </ul>
  `,
  // Create some classes.
  styles: [`
    .yellow { background-color:yellow }
    .blue { background-color:blue }
    .red { background-color:red }
    .green { background-color:yellow }
    .purple { background-color:yellow }
  `]
})
export class AppComponent {
  title = 'attribute-directive-demo';
}
