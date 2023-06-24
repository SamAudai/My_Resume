import { Injectable } from '@angular/core';
import { IExperience, EXPERIENCES } from "../models/experiences";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { baseURL } from "../models/baseUrl";

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  constructor(private http:HttpClient) { }

  getExperiencesByPromise():Promise<IExperience[]>{
    return Promise.all(EXPERIENCES);
  }

  getExperiencesByObservable():Observable<IExperience[]>{
    return this.http.get<IExperience[]>(baseURL + "experience");
  }  

}
