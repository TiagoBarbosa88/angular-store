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
    this._cartObservable.next(this.productsCart);
    return this.productsCart.push(products);
  }

  public carlcularTotal(): number {
    let total = 0;
    for (const product of this.productsCart) {
      total += product.price;
    }
    return total;
  }
}
