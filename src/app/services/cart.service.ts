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

  constructor() {
    let existingCart = localStorage.getItem('currentCart')
    if(existingCart){
      this.productsCart = JSON.parse(existingCart)
      localStorage.setItem('currentCart', JSON.stringify(this.productsCart));
    } else {
      localStorage.setItem('currentCart', JSON.stringify(this.productsCart));
    }
    this._cartObservable.next(this.productsCart);
  }

  public addCartModel(products: CartModel) {
    const existingProduct = this.productsCart.find(p => p.id === products.id);
    if(existingProduct){
      existingProduct.units += products.units ?? 0
      localStorage.setItem('currentCart', JSON.stringify(this.productsCart))
      this._cartObservable.next(this.productsCart);
    }else {
      this.productsCart.push(products);
      localStorage.setItem('currentCart', JSON.stringify(this.productsCart))
      this._cartObservable.next(this.productsCart);
    }
  }

  public carlcularTotal(): number {
    //const totalUnits = this.productsCart.reduce((acc, product) => acc + product.units, 0);
    const totalPrice = this.productsCart.reduce((acc, product) => acc + (product.price * product.units), 0);

    return totalPrice;
  }
}
