import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SkillComponent } from './skill/skill.component';


const routes: Routes = [
  {
    path: '',      //this route for home page
    redirectTo: "/",    
    pathMatch: 'full'
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "education",
    component: EducationComponent    
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'courses',
    component: CourseComponent
  },
  {
    path: 'skills',
    component: SkillComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

/* export function initializeRouter(router: Router) {
  return () => {
    router.navigateByUrl("/"); // Navigate to the about route
  };
} */

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],    
  exports: [RouterModule]
})
export class AppRoutingModule { }
