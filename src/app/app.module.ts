import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SectionTitleComponent } from './shared/section-title/section-title.component';
import { AboutComponent } from './pages/about/about.component';
import { EducationComponent } from './pages/education/education.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { PhilosophyComponent } from './pages/philosophy/philosophy.component';
import { InternshipComponent } from './pages/internship/internship.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomesectionComponent } from './pages/homesection/homesection.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailJSResponseStatus } from '@emailjs/browser';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomesectionComponent,
    NavbarComponent,
    FooterComponent,
    SectionTitleComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    PhilosophyComponent,
    InternshipComponent,
    CertificationsComponent,
    ContactComponent,
    HomesectionComponent,
    GalleryComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,          // ✅ VERY IMPORTANT
    BrowserAnimationsModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
