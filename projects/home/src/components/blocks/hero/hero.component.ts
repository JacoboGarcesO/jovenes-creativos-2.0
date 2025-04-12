import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AnimationService } from 'ui';

@Component({
  selector: 'home-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  private _animationService = inject(AnimationService);
  private animations: any[] = [];

  ngOnInit(): void {
    this.animations.push(
      this._animationService.fadeIn({
        element: '.hero__title',
        duration: 1,
        delay: 0.5,
        ease: 'power1.out',
        direction: 'left',
      })
    );

    this.animations.push(
      this._animationService.fadeIn({
        element: '.hero__description',
        duration: 1,
        delay: 0.75,
        ease: 'power1.out',
        direction: 'left',
      })
    );

    this.animations.push(
      this._animationService.fadeIn({
        element: '.hero__image:nth-of-type(1)',
        duration: 1,
        delay: 0.5,
        ease: 'power1.out',
        direction: 'right',
      })
    );

    this.animations.push(
      this._animationService.fadeIn({
        element: '.hero__image:nth-of-type(2)',
        duration: 1,
        delay: 0.75,
        ease: 'power1.out',
        direction: 'right',
      })
    );

    this.animations.push(
      this._animationService.fadeIn({
        element: '.hero__image:nth-of-type(3)',
        duration: 1,
        delay: 0.25,
        ease: 'power1.out',
        direction: 'right',
      })
    );

    this.animations.push(
      this._animationService.fadeIn({
        element: '.hero__decorator:nth-of-type(3)',
        duration: 1,
        delay: 0.5,
        ease: 'power1.out',
        direction: 'top',
      })
    );

    this.animations.push(
      this._animationService.fadeIn({
        element: '.hero__decorator:nth-of-type(5)',
        duration: 1,
        delay: 0.25,
        ease: 'power1.out',
        direction: 'bottom',
      })
    );
  }

  ngOnDestroy(): void {
    this.animations.forEach((animation) => animation.kill()); 
    this.animations = [];
  }
}
