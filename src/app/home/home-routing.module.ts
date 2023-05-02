import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductDetailsComponent } from '../shared/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'products',
    component: HomeComponent
  },
  {
    path: '',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }
