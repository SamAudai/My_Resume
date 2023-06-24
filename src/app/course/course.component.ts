import { Component, OnInit } from '@angular/core';
import { flyInOut } from '../animations/app-animation';
import { CoursesService } from '../services/courses.service';
import { Icourses } from '../models/courses';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },    
  animations: [flyInOut()] 
})
export class CourseComponent implements OnInit{

  name:string = "";
  courses!:Array<Icourses>;

  constructor(public service:CoursesService){}

  ngOnInit(): void {
    this.name = "Courses";
    //this.service.getCoursesByObservable().subscribe(res=>this.courses=res);
    this.service.getCoursesByPromise().then(res => this.courses=res);
  }
 
}
