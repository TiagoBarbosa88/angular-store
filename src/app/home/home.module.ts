import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [HomeComponent, ProductDetailsComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
