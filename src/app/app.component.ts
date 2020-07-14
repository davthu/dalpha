import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ThemeService } from './core/services/theme.service';
import {
  faTwitter,
  faFacebook,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isDarkTheme$: Observable<boolean>;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkTheme$ = this.themeService.isDarkTheme$;
  }
}
