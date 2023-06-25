import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToogleThemeService {
  public isDarkMode = false;

  constructor() {}

  public darkMode() {
    return (this.isDarkMode = !this.isDarkMode);
  }
}
