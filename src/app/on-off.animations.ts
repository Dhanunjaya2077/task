import { animate, state, style, transition, trigger } from '@angular/animations';

export const ON_OFF_ANIMATION =
	trigger('onOffTrigger', [
		state('off', style({
		  transform: 'scale(1)'
		})),
		state('on',   style({
          transform: 'scale(1.5)',
		})),
		transition('off => on', animate('.6s 100ms ease-in')),
		transition('on => off', animate('.7s 100ms ease-out'))
	]); 