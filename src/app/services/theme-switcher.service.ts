import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {

  constructor() { }

  setTheme(theme: string) {

    switch (theme) {

      case 'systemSetting': {

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        document.body.classList.toggle('dark', prefersDark.matches);

        prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));

        break;
      }
      case 'light': {

        document.body.classList.remove('dark');

        break;
      }
      case 'dark': {

        document.body.classList.add('dark');

        break;
      }
    }
  }

  toggleDarkTheme(shouldAdd: boolean) {

    document.body.classList.toggle('dark', shouldAdd);
  }
}
