import { Component } from '@angular/core';
import { flyInOut } from '../animations/app-animation';

@Component({
  selector: 'app-mycv',
  templateUrl: './mycv.component.html',
  styleUrls: ['./mycv.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;' 
    },  
  animations: [flyInOut()] 
})
export class MycvComponent {

}
