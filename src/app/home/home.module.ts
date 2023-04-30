import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProductsRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, ProductsRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent]
})
export class ProductsModule { }
