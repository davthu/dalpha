import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule, MaterialModule, ScullyLibModule],
})
export class AboutModule {}
