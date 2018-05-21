import {animate, animateChild, group, query, state, style, transition, trigger} from '@angular/animations';

export const windowAppearance = trigger('windowAppearance', [
    state('*', style({transform: 'scale(1) translateY(0)', opacity: 1})),
    transition(':enter', [
        style({transform: 'scale(0.5) translateY(250px)', opacity: 0}),
        animate('250ms ease-out')
    ]),
    transition(':leave', [
        animate('250ms ease-in', style({transform: 'scale(0.5) translateY(250px)', opacity: 0}))
    ])
]);

export const wrapperAppearance = trigger('wrapperAppearance', [
    state('*', style({opacity: 1})),
    transition(':enter', [
        group([
            query(':self', [
                style({opacity: 0}),
                animate(250)
            ]),
            query('@windowAppearance', [
                animateChild()
            ])])
    ]),
    transition(':leave', [
        group([
            query(':self', [
                animate(250, style({opacity: 0}))
            ]),
            query('@windowAppearance', [
                animateChild()
            ])
        ])
    ]),
]);
