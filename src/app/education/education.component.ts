import { Component , OnInit} from '@angular/core';
import { flyInOut } from '../animations/app-animation';
import { EducationService } from '../services/education.service';
import { Ieducation } from '../models/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },  
  animations: [flyInOut()] 
})
export class EducationComponent implements OnInit{
  
  name:string = "";
  edu!:Array<Ieducation>;

  constructor(public componentService:EducationService){}

  ngOnInit(): void {    
    this.name = 'Education';
    //this.componentService.getEducationByURL().subscribe(res=>this.edu=res);
    this.componentService.getEducationByPromise().then(res=>this.edu=res);
  }

}
