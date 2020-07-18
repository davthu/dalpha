import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferenceComponent } from './reference.component';
import { ReferenceListComponent } from './reference-list/reference-list.component';

const routes: Routes = [
  {
    path: '',
    component: ReferenceListComponent,
  },
  {
    path: ':title',
    component: ReferenceComponent,
  },
  {
    path: '**',
    component: ReferenceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferenceRoutingModule {}
