import { Component , OnInit } from '@angular/core';
import { flyInOut } from '../animations/app-animation';
import { IExperience } from '../models/experiences';
import { ExperiencesService } from '../services/experiences.service';


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
  experience!:Array<IExperience>;

  constructor(public service:ExperiencesService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.name = "Experiance";
    //this.service.getExperiencesByObservable().subscribe(res => this.experience=res);
    this.service.getExperiencesByPromise().then(res => this.experience=res);
  }

}
