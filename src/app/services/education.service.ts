import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EDUCATION, Ieducation } from "../models/education";
import { baseURL } from '../models/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class EducationService {  

  constructor(private http: HttpClient) { }

  getEducationByURL(): Observable<Ieducation[]> {
    return this.http.get<Ieducation[]>(baseURL + 'education');    
  }

  getEducationByPromise(): Promise<Ieducation[]>{
    return Promise.all(EDUCATION);
  }
  
}
