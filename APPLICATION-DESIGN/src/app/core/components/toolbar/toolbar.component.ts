import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
}
