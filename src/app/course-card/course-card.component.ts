import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})

// comment?

// e3terefbeya is course basically!!!
export class CourseCardComponent implements OnInit {

  @Input()
  course:Course;

  @Input()
  cardIndex:number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  courseClicked(){
    console.log('You have clicked on a course!')
  }

  catchEventEmitter(){
    this.courseSelected.emit(this.course);
    console.log('Emitted course event')
  }

  isDescription(){
    console.log('Inisdesc', this.course.longDescription);
    return this.course && this.course.longDescription;
  }

}
