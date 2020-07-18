import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModule } from '../material.module';
@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ScullyLibModule,
    MaterialModule,
  ],
})
export class ProductModule {}
