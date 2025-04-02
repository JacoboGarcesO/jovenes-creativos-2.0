import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/blocks/header/header.component";

@Component({
  selector: 'home-header-container',
  imports: [HeaderComponent],
  template: '<home-header>'
})
export class HeaderContainerComponent {}