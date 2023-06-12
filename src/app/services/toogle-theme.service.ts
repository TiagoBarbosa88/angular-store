import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToogleThemeService {


  public isDarkMode = true

  constructor() { }

  public setDarkMode(){
   return this.isDarkMode = !this.isDarkMode
  }
}
