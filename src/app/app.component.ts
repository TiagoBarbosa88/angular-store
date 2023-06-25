import { Component } from '@angular/core';
import { ToogleThemeService } from './services/toogle-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public darkMode: ToogleThemeService) {}

  title = 'angular-store';
}
