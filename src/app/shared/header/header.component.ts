import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(
  private langService: LanguageService,
  private themeService: ThemeService
) {}

setLang(lang: 'en' | 'mr') {
  this.langService.setLanguage(lang);
}

toggleTheme() {
  this.themeService.toggleTheme();
}

}
