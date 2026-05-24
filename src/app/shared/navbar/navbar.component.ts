import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {




  isOpen = false;

  constructor(
    private langService: LanguageService,
    private themeService: ThemeService
  ) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  setLang(lang: 'en' | 'mr') {
    this.langService.setLanguage(lang);
    this.isOpen = false;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
