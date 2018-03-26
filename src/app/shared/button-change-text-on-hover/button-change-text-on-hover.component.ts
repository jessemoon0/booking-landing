import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-change-text-on-hover',
  templateUrl: './button-change-text-on-hover.component.html',
  styleUrls: ['./button-change-text-on-hover.component.scss']
})
export class ButtonChangeTextOnHoverComponent {

  @Input() textVisible: string;
  @Input() textHidden: string;

}
