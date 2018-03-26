import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() text: string;
  @Input() userImage: string;
  @Input() username: string;
  @Input() userDate: string;
  @Input() rating: number;

  constructor() { }

  ngOnInit() {
  }

}
