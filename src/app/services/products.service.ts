import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Products } from '../shared/model/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl = 'https://fakestoreapi.com/products';
  baseCategory = 'https://fakestoreapi.com/products/category';

  private readonly _products = new BehaviorSubject<Products[]>([]);
  public products$ = this._products.asObservable();

  private readonly _idSubject = new Subject<Products | null>();
  public idSubject$ = this._idSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Verifica antes se a categoria existe e retorna a requisição de acordo :
  getAllProducts(category: string | null): Observable<Products[]> {
    if (category === null || undefined) {
      return this.http.get<Products[]>(this.baseUrl);
    } else {
      return this.http.get<Products[]>(` ${this.baseCategory}/${category}`);
    }
  }

  // Se inscreve para retornar os dados da requisição realizada no metodo anterior
  returnAllProducts(category: string | null) {
    return this.getAllProducts(category).subscribe((data) => {
      this._products.next(data);
    });
  }

  // Faz a requisação para pegar o produto por ID
  getById(id: string | null): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.baseUrl}/${id}`);
  }

  // Se inscreve para pegar os dados da requisição
  returnProductById(id: string | null) {
    return this.getById(id).subscribe((data: any) => {
      return this._idSubject.next(data);
    });
  }
}
