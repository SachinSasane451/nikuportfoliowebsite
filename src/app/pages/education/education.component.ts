import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  data: any;
  lang: 'en' | 'mr' = 'en';

  constructor(
    private cs: ContentService,
    private langService: LanguageService
  ) {}

  ngOnInit(): void {
    this.langService.language$.subscribe(l => this.lang = l);
    this.cs.getData().subscribe(res => this.data = res);
  }
}
