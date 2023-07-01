import { Component, OnInit } from '@angular/core';
import { flyInOut } from '../animations/app-animation';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },  
  animations: [flyInOut()] 
})
export class AboutComponent implements OnInit{

  name:string = "";

  skill:Array<string> = ['Software Engineer', 'Full Stack Web Developer', 'Application Developer'];
  skillIndex:number = 0;
  skillCurrent:string = '';

  constructor(){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.name =  "About";

    this.setSkill();
    setInterval(()=>{
      this.changeSkill();
    }, 3000);
  }

  setSkill():void{
    this.skillCurrent  = this.skill[this.skillIndex];
  }

  changeSkill():void{
    this.skillIndex++;
    if(this.skillIndex >= this.skill.length){
      this.skillIndex = 0;
    }
    this.setSkill();
    this.animateSkill();
  }

  animateSkill():void {
    const sentenceElement = document.getElementById('skill');
    if (sentenceElement) {
      sentenceElement.classList.remove('fade-in');
      void sentenceElement.offsetWidth; // Trigger reflow to restart the animation
      sentenceElement.classList.add('fade-in');
    }
  }

}
