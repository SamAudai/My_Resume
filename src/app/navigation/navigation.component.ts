import { Component , OnInit} from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'], 
})
export class NavigationComponent implements OnInit{

  name:string = "";
  c_name:string = "";

  constructor(public service:MyserviceService){}

  ngOnInit(): void {
    this.name = this.service.titleName(this.c_name);
    }

}