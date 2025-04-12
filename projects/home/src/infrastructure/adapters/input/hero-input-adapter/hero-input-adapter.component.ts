import { Component } from '@angular/core';
import { HeroComponent } from '../../../ui/components/hero/hero.component';

@Component({
  selector: 'home-hero-input-adapter',
  imports: [HeroComponent],
  template: '<home-hero />'
})
export class HeroInputAdapterComponent {

}
