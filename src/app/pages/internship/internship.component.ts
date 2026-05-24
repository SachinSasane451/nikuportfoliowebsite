import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit, OnDestroy {

  experiences: any[] = [];
  activeIndex = -1;
  currentIndex = 0;
  intervalId: any;
  lang: 'en' | 'mr' = 'en';

  constructor(
    private cs: ContentService,
    private langService: LanguageService
  ) {}

  ngOnInit(): void {
    this.langService.language$.subscribe(l => this.lang = l);

    this.cs.getData().subscribe(data => {
      this.experiences = data.workExperience.experiences || [];
    });
  }

  toggleSchool(i: number) {
    this.activeIndex = this.activeIndex === i ? -1 : i;
    this.currentIndex = 0;
    this.startAutoSlide();
  }

  startAutoSlide() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      if (this.activeIndex === -1) return;
      const imgs = this.experiences[this.activeIndex].images;
      this.currentIndex = (this.currentIndex + 1) % imgs.length;
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
