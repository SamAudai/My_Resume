import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { flyInOut } from '../animations/app-animation';
import { MyserviceService } from '../myservice.service';

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

  constructor(public service:MyserviceService){}

  ngOnInit(): void {
    this.name = this.service.titleName("Courses");
  }
 
}
