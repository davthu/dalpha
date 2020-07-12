import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _darkTheme: BehaviorSubject<boolean>;
  public isDarkTheme$: Observable<boolean>;
  constructor(private overlay: OverlayContainer) {
    const isPresistentDarkTheme =
      window.localStorage['dark-theme'] === '1' ? true : false;
    this._darkTheme = new BehaviorSubject<boolean>(isPresistentDarkTheme);
    this.isDarkTheme$ = this._darkTheme.asObservable();
    this.updateTheme(isPresistentDarkTheme);
  }

  setDarkTheme(isDarkTheme: boolean): void {
    this._darkTheme.next(isDarkTheme);
    window.localStorage['dark-theme'] = isDarkTheme ? '1' : '0';
    this.updateTheme(isDarkTheme);
  }

  updateTheme(isDarkTheme: boolean): void {
    if (isDarkTheme) {
      this.overlay.getContainerElement().classList.add('dark-theme');
      document.body.classList.add('dark-theme');
    } else {
      this.overlay.getContainerElement().classList.remove('dark-theme');
      document.body.classList.remove('dark-theme');
    }
  }
}
