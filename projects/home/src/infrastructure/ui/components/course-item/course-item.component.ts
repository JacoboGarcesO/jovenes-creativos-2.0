import { Component, input } from '@angular/core';
import { ModalComponent } from 'shared';

@Component({
  selector: 'home-course-item',
  imports: [ModalComponent],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.scss'
})
export class CourseItemComponent {
  public title = input.required<string>();
  public image = input.required<string>();
}
