import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-inline',
  templateUrl: './button-inline.component.html',
  styleUrls: ['./button-inline.component.scss']
})
export class ButtonInlineComponent  {
  @Input() text: string;
  @Input() hasArrow = false;

}
