import { Component, OnInit } from '@angular/core';
import {REVIEWS} from './review/reviews';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  reviewsArr: Array<string> = REVIEWS;

  constructor() { }

  ngOnInit() {
  }

}
