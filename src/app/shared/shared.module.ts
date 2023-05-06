import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { ProductsCardComponent } from './products-card/products-card.component';

@NgModule({
  declarations: [ProductsCardComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, ProductsCardComponent],
})
export class SharedModule {}
