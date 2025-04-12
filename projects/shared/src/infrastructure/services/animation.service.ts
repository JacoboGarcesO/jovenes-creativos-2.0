import { Injectable } from '@angular/core';
import { gsap } from 'gsap';

interface AnimationProps {
  element: string | Element | Element[] | string[];
  duration?: number;
  delay?: number;
  ease?: 'none' | 'power1.in' | 'power1.out' | 'power2.in' | 'power3.in' | 'power4.in' | 'elastic.in' | 'back.in' | 'bounce.out';
  onComplete?: () => void;
  direction: 'left' | 'right' | 'top' | 'bottom';
  distance?: number;
}

interface SlideInProps extends AnimationProps {
  distance?: number;
}

interface ScaleProps extends AnimationProps {
  fromScale?: number;
  toScale?: number;
}

interface StaggerProps {
  elements: string | Element[];
  animationProps: object;
  staggerTime?: number;
  duration?: number;
  delay?: number;
  onComplete?: () => void;
}
@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  constructor() { }

  /**
   * Fade in animation
   * @param element Element or selector to animate
   * @param duration Animation duration in seconds
   * @param delay Delay before animation starts in seconds
   * @param direction Optional direction for horizontal movement ('left' or 'right')
   * @param distance Optional distance to move in pixels
   * @param onComplete Callback function to execute when animation completes
   */
  fadeIn({ element, duration = 0.5, delay = 0, ease = 'none', direction, distance = 100, onComplete = () => { } }: AnimationProps) {
    const props: any = {
      opacity: 1,
      duration,
      delay,
      ease,
      onComplete
    };

    if (direction) {
      const fromProps: any = { opacity: 0 };

      if (direction === 'left') {
        fromProps.x = -distance;
      } else if (direction === 'right') {
        fromProps.x = distance;
      } else if (direction === 'top') {
        fromProps.y = distance; 
      } else if (direction === 'bottom') {
        fromProps.y = -distance;
      }

      props.x = 0;
      props.y = 0;
      return gsap.fromTo(element, fromProps, props);
    }

    return gsap.to(element, props);
  }

  /**
   * Fade out animation
   * @param element Element or selector to animate
   * @param duration Animation duration in seconds
   * @param delay Delay before animation starts in seconds
   * @param direction Optional direction for horizontal movement ('left' or 'right')
   * @param distance Optional distance to move in pixels
   * @param onComplete Callback function to execute when animation completes
   */
  fadeOut({ element, duration = 0.5, delay = 0, ease = 'none', direction, distance = 100, onComplete = () => { } }: AnimationProps) {
    const props: any = {
      opacity: 0,
      duration,
      delay,
      ease,
      onComplete
    };

    if (direction) {
      if (direction === 'left') {
        props.x = -distance;
      } else if (direction === 'right') {
        props.x = distance;
      } else if (direction === 'top') {
        props.y = -distance; 
      } else if (direction === 'bottom') {
        props.y = distance;
      }
    }

    return gsap.to(element, props);
  }

  /**
   * Slide in from direction
   * @param element Element or selector to animate
   * @param direction Direction to slide from ('left', 'right', 'top', 'bottom')
   * @param distance Distance to slide in pixels
   * @param duration Animation duration in seconds
   * @param delay Delay before animation starts in seconds
   * @param onComplete Callback function to execute when animation completes
   */
  slideIn({ element, direction, distance = 100, duration = 0.5, delay = 0, ease = 'none', onComplete = () => { } }: SlideInProps) {
    const from: any = { opacity: 0, duration, delay, ease, onComplete };

    switch (direction) {
      case 'left':
        from.x = -distance;
        break;
      case 'right':
        from.x = distance;
        break;
      case 'top':
        from.y = -distance;
        break;
      case 'bottom':
        from.y = distance;
        break;
    }

    return gsap.from(element, from);
  }

  /**
   * Scale animation
   * @param element Element or selector to animate
   * @param fromScale Starting scale value
   * @param toScale Ending scale value
   * @param duration Animation duration in seconds
   * @param delay Delay before animation starts in seconds
   * @param onComplete Callback function to execute when animation completes
   */
  scale({ element, fromScale = 0, toScale = 1, duration = 0.5, delay = 0, ease = 'none', onComplete = () => { } }: ScaleProps) {
    return gsap.fromTo(element,
      { scale: fromScale, opacity: fromScale === 0 ? 0 : 1 },
      { scale: toScale, opacity: 1, duration, delay, ease, onComplete }
    );
  }

  /**
   * Stagger animations for multiple elements
   * @param elements Elements or selector to animate
   * @param animationProps Animation properties
   * @param staggerTime Time between each element animation
   * @param duration Animation duration in seconds
   * @param delay Delay before animation starts in seconds
   * @param onComplete Callback function to execute when all animations complete
   */
  stagger({ elements, animationProps, staggerTime = 0.1, duration = 0.5, delay = 0, onComplete = () => { } }: StaggerProps) {
    return gsap.to(elements, {
      ...animationProps,
      duration,
      delay,
      stagger: staggerTime,
      onComplete
    });
  }

  /**
   * Create a timeline for sequence animations
   * @param defaults Default properties for the timeline
   */
  createTimeline({ defaults = {} }: { defaults?: gsap.TimelineVars } = {}) {
    return gsap.timeline(defaults);
  }
}