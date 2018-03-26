import {animate, style, transition, trigger, keyframes, state} from '@angular/animations';

// DID NOT WORK AS INFINITE ANIMATIONS NOT SUPPORTED

// Change state from normal to activated and animation occurs, add as attribute:
// [@pulsateElement]="'activated'"

export const PULSATE =
  trigger('pulsateElement', [
    state('normal', style({
      'transform': 'scale(1)',
      'box-shadow': 'none'
    })),
    state('activated', style({
      'transform': 'scale(1)',
      'box-shadow': 'none'
    })),
    transition('normal => activated', [
      animate('1000ms linear infinite',
        keyframes([
          style({
            'transform': 'scale(1)',
            'box-shadow': 'none',
            offset: 0
          }),
          style({
            'transform': 'scale(1.05)',
            'box-shadow': '0 1rem 4rem rgba(0, 0, 0, .25)',
            offset: 0.5
          }),
          style({
            'transform': 'scale(1)',
            'box-shadow': 'none',
            offset: 1
          })
      ]))
    ])
  ]);
