import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private lang$ = new BehaviorSubject<'en' | 'mr'>(
    (localStorage.getItem('lang') as 'en' | 'mr') || 'en'
  );

  language$ = this.lang$.asObservable();

  setLanguage(lang: 'en' | 'mr') {
    this.lang$.next(lang);
    localStorage.setItem('lang', lang);
  }

  get current() {
    return this.lang$.value;
  }
}
