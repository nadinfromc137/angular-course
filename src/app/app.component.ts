import {COURSES} from '../db-data';
import { Component } from '@angular/core';
import { Course } from './model/course';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;
  //coreCourses =  COURSES[0];
  //secondCourse = COURSES[1];
  //thirdCourse = COURSES[2];

  catchEventEmitter(course:Course, isFirst: boolean){
      console.log('App component description', course.longDescription);
      console.log('is first: ', isFirst);
  }
}
