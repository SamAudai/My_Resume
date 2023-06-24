import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { skills , SKILLS } from "../models/skills";
import { baseURL } from "../models/baseUrl";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http:HttpClient) { }

  getSkillsByUrl():Observable<skills[]>{
    return this.http.get<skills[]>(baseURL + "skills");
  }

  getSkillsByPromise():Promise<skills[]>{
    return Promise.all(SKILLS);
  }

}
