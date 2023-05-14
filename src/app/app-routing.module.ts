import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { MycvComponent } from './home/mycv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SkillComponent } from './skill/skill.component';


const routes: Routes = [
  {
    path: '',      //this route for home page
    redirectTo: '/home',
    //component: MycvComponent,
    pathMatch: 'full'
  },
  {
    path: "home",
    component: MycvComponent,
    pathMatch: 'full',  
  },
  {
    path: "about",
    component: AboutComponent,
    pathMatch: 'full',   

  },
  {
    path: "education",
    component: EducationComponent,
    pathMatch: 'full',    
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    pathMatch: 'full'
  },
  {
    path: 'course',
    component: CourseComponent,
    pathMatch: 'full'
  },
  {
    path: 'skill',
    component: SkillComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule],    
  exports: [RouterModule]
})
export class AppRoutingModule { }
