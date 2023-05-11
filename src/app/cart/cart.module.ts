import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { SharedModule } from '../shared/shared.module';
import { CartRoutes } from './cart-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, CartRoutes],
  declarations: [CartComponent],
})
export class CartModule {}
