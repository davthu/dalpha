import { NgModule } from '@angular/core';

import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';

import {
  faTwitter,
  faFacebook,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  declarations: [],
})
export class FaIconModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTwitter, faFacebook, faYoutube, faInstagram);
  }
}
