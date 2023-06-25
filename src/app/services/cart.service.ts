import { Injectable } from '@angular/core';
import { CartModel } from '../shared/model/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public productsCart: CartModel[] = [];

  constructor() {}

  addCartModel(products: CartModel) {
    console.log(this.productsCart);
    return this.productsCart.push(products);
  }
}
