import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {

  toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  initTheme() {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark');
    }
  }
}
