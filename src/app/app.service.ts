import { Injectable, Injector } from '@angular/core';

import { appSettings } from './app.settings';
import { ThemeSwitcherService } from 'src/app/services/theme-switcher.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private themeSwitcherService: ThemeSwitcherService) { }

  initialize() {

    this.themeSwitcherService.setTheme(appSettings.theme);
  }
}
