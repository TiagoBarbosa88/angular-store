import { Component, OnInit } from '@angular/core';
import { ToogleThemeService } from './services/toogle-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  constructor(public darkMode: ToogleThemeService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'angular-store';
}
