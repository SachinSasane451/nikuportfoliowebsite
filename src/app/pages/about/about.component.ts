import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  about: any[] = [];
  lang: 'en' | 'mr' = 'en';

  constructor(
    private cs: ContentService,
    private langService: LanguageService
  ) {}

  ngOnInit(): void {
    this.langService.language$.subscribe(l => this.lang = l);
    this.cs.getData().subscribe(data => {
      this.about = data.about.content;
    });
  }
}
