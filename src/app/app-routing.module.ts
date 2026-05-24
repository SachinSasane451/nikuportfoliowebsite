import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EducationComponent } from './pages/education/education.component';
import { InternshipComponent } from './pages/internship/internship.component';
import { PhilosophyComponent } from './pages/philosophy/philosophy.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { HomesectionComponent } from './pages/homesection/homesection.component';
import { GalleryComponent } from './pages/gallery/gallery.component';



const routes: Routes = [
  { path: '', component:HomesectionComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'philosophy', component: PhilosophyComponent },
  { path: 'internship', component: InternshipComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
