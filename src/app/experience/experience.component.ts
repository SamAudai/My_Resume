import { Component , OnInit } from '@angular/core';
import { flyInOut } from '../animations/app-animation';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },  
  animations: [flyInOut()] 
})
export class ExperienceComponent implements OnInit{

  name:string = "";

  constructor(public service:MyserviceService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.name = this.service.titleName("Experiance");
  }

}
