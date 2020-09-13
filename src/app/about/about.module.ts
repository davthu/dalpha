import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AboutComponent, ContactFormComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MaterialModule,
    ScullyLibModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
})
export class AboutModule {}
