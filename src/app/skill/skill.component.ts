import { Component, OnInit } from '@angular/core';
import { flyInOut } from '../animations/app-animation';
import { SkillsService } from "../services/skills.service";
import { skills } from "../models/skills";


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },  
  animations: [flyInOut()] 
})
export class SkillComponent implements OnInit {

  name:string = '';
  skill!:Array<skills>;

  constructor(public service:SkillsService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.name = 'Skills';
    //this.service.getSkillsByUrl().subscribe(res=>this.skill=res);
    this.service.getSkillsByPromise().then(res=>this.skill=res);
  }
}
