import {COURSES} from '../db-data';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  coreCourses =  COURSES[0];
  secondCourse = COURSES[1];
  thirdCourse = COURSES[2];
}
