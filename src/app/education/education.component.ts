import { Component , OnInit} from '@angular/core';
import { flyInOut } from '../animations/app-animation';
import { MyserviceService } from '../myservice.service';

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

  constructor(public service:MyserviceService){}

  ngOnInit(): void {
    this.name = this.service.titleName("Education");
  }

}
