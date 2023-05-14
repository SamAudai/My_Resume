import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  titleName(componentName:string){
    return componentName;    
  }
}
