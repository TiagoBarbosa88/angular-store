import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ProductsCardComponent } from './products-card/products-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ProductsCardComponent,
    MaterialModule
  ],
  declarations: [ProductsCardComponent, ProductDetailsComponent]
})
export class SharedModule { }
