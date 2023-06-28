import { Injectable } from '@angular/core';
import { CartModel } from '../shared/model/products';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public productsCart: CartModel[] = [];

  public _cartObservable = new BehaviorSubject(this.productsCart);
  public readonly cartObservable$ = this._cartObservable.asObservable();

  constructor() {}

  public addCartModel(products: CartModel) {
    const existingProduct = this.productsCart.find(p => p.id === products.id);
    if(existingProduct){
      existingProduct.units += products.units ?? 0


    } else {
      this.productsCart.push(products);

    }

    this._cartObservable.next(this.productsCart);

  }

  public carlcularTotal(): number {
    //const totalUnits = this.productsCart.reduce((acc, product) => acc + product.units, 0);
    const totalPrice = this.productsCart.reduce((acc, product) => acc + (product.price * product.units), 0);

    return totalPrice;
  }
}
