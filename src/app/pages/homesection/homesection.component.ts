import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/seo/seo.service';
import { ContentService } from 'src/app/services/content.service';
import { LanguageService } from 'src/app/services/language.service';


@Component({
  selector: 'app-homesection',
  templateUrl: './homesection.component.html',
  styleUrls: ['./homesection.component.css']
})
export class HomesectionComponent implements OnInit {

  data: any;
lang: 'en' | 'mr' = 'en';
  constructor(
     private langService: LanguageService,
    private content: ContentService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.seo.set(
      'Nikita Sasane | B.Ed Teaching Portfolio',
      'Official teaching portfolio of Nikita Sasane, aspiring school teacher with a focus on discipline and student growth.'
    );
     this.langService.language$.subscribe(l => this.lang = l);

    this.content.getData().subscribe(res => this.data = res);
  }
}
