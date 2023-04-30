import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ProductsCardComponent } from './products-card/products-card.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ProductsCardComponent
  ],
  declarations: [ProductsCardComponent]
})
export class SharedModule { }
