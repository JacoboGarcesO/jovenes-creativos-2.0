import { Component } from '@angular/core';
import { HeroComponent } from "../../components/blocks/hero/hero.component";

@Component({
  selector: 'home-hero-container',
  imports: [HeroComponent],
  template: '<home-hero />'
})
export class HeroContainerComponent { }