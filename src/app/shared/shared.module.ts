import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { ProductsCardComponent } from './products-card/products-card.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ProductsCardComponent],
  imports: [CommonModule, MaterialModule, NgxPaginationModule],
  exports: [MaterialModule, ProductsCardComponent],
})
export class SharedModule {}
