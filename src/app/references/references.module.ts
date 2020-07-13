import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferencesRoutingModule } from './references-routing.module';
import { ReferencesComponent } from './references.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ReferencesComponent],
  imports: [
    CommonModule,
    ReferencesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class ReferencesModule {}
