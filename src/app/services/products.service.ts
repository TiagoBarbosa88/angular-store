import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Products } from '../shared/model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

baseUrl = 'https://fakestoreapi.com/products';

private readonly _products = new BehaviorSubject<Products[]>([])
public products$ = this._products.asObservable()

constructor(private http: HttpClient ) { }

getAllProducts():Observable<Products[]> {
  return this.http.get<Products[]>(this.baseUrl)
}

returnAllProducts(){
  return this.getAllProducts().subscribe( data => {
   this._products.next(data)

  })
}


}
