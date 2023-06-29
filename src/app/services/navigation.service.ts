import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private showNavigationSubject = new BehaviorSubject<boolean>(true);
  showNavigation$ = this.showNavigationSubject.asObservable();

  updateShowNavigationState(showNavigation: boolean) {
    this.showNavigationSubject.next(showNavigation);
  }
}
