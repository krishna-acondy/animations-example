import {
    AnimationReferenceMetadata,
    AnimationTriggerMetadata,
    animate,
    animation,
    group,
    stagger,
    style,
    transition,
    trigger,
    useAnimation,
    query
} from '@angular/animations';

export const staggerInFromLeft: AnimationReferenceMetadata = animation([
    query('app-card', [
        style({ opacity: 0 })
    ]),
    query('app-card', [
        style({
            transform: 'translateX(-20%)',
            opacity: 0
        }),
        stagger(-50, [
            animate('0.2s ease-in', style({
                transform: 'translateX(0%)',
                opacity: 1
            }))
        ])
    ])
]);

export const staggerInFromRight: AnimationReferenceMetadata = animation([
    query('app-card', [
        style({
            transform: 'translateX(20%)',
            opacity: 0
        }),
        stagger(50, [
            animate('0.2s ease-in', style({
                transform: 'translateX(0%)',
                opacity: 1
            }))
        ])
    ], { optional: true })
]);

export const onRoute: AnimationTriggerMetadata = trigger('route', [
  transition('0 => 1, 0 => 2, 0 => 3', [
    group([
      useAnimation(staggerInFromRight)
    ])
  ]),
  transition('1 => 2, 2 => 3, 1 => 3', [
    group([
      useAnimation(staggerInFromRight)
    ])
  ]),
  transition('3 => 1, 2 => 1, 3 => 2', [
    group([
      useAnimation(staggerInFromLeft)
    ])
  ])
]);
