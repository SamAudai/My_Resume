import { Injectable } from '@angular/core';
import { Icourses, COURSES } from "../models/courses";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { baseURL } from "../models/baseUrl";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCoursesByPromise(): Promise<Icourses[]> {
    return Promise.all(COURSES);
  }

  getCoursesByObservable(): Observable<Icourses[]> {
    return this.http.get<Icourses[]>(baseURL + "courses");
  }

}
