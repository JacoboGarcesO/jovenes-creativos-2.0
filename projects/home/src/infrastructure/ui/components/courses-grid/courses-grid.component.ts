import { Component } from '@angular/core';
import { CourseItemComponent } from "../course-item/course-item.component";

@Component({
  selector: 'home-courses-grid',
  imports: [CourseItemComponent],
  templateUrl: './courses-grid.component.html',
  styleUrl: './courses-grid.component.scss'
})
export class CoursesGridComponent {

}
