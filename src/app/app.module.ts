import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { baseURL } from "./models/baseUrl";

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import { CourseComponent } from './course/course.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigationComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    CourseComponent,    
    PageNotFoundComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide:'baseURL', useValue:baseURL}],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
