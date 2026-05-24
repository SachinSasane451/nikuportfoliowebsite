import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnDestroy {

  skills: any;
  certIndex = 0;
  intervalId: any;
  lang: 'en' | 'mr' = 'en';

  constructor(
    private cs: ContentService,
    private langService: LanguageService
  ) {}

  ngOnInit(): void {
    this.langService.language$.subscribe(l => this.lang = l);

    this.cs.getData().subscribe(data => {
      this.skills = data.skillsSection;
      this.startAutoSlide();
    });
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.certIndex =
        (this.certIndex + 1) % this.skills.certifications.length;
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
