import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ReferenceRoutingModule } from './reference-routing.module';
import { ReferenceComponent } from './reference.component';
import { ReferenceListComponent } from './reference-list/reference-list.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [ReferenceComponent, ReferenceListComponent],
  imports: [
    CommonModule,
    ReferenceRoutingModule,
    ScullyLibModule,
    MaterialModule,
  ],
})
export class ReferenceModule {}
