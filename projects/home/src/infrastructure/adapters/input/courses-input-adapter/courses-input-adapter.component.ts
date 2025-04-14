import { Component } from '@angular/core';
import { CoursesGridComponent } from "../../../ui/components/courses-grid/courses-grid.component";

@Component({
  selector: 'home-courses-input-adapter',
  imports: [CoursesGridComponent],
  template: '<home-courses-grid />',
})
export class CoursesInputAdapterComponent { }