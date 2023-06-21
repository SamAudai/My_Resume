import { trigger, state, style, animate, transition } from '@angular/animations'; 

//Animation Support for Route Changes
export function flyInOut() {
    return trigger('flyInOut', [
        state('*', style({ opacity: 1, transform: 'translateX(0)'})),
        transition(':enter', [
            style({ transform: 'translateY(-100%)', opacity: 0 }),
            animate('550ms ease-in')
        ]),
        transition(':leave', [
            animate('550ms ease-out', style({ transform: 'translateX(100%)', opacity: 0}))
        ])
    ]);
}