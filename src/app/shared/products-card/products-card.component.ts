import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductsService } from '../../services/products.service';
import { Products, CartModel } from '../model/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss'],
})
export class ProductsCardComponent implements OnInit {
  @Input() category!: string | null;
  @Input() products$!: Observable<Products[]>;

  @Output() imageClicked = new EventEmitter();
  @Output() addToCartClicked = new EventEmitter();

  constructor(
    private productsService: ProductsService,
    public cartService: CartService
  ) {}

  public ngOnInit() {
    this.productsService.returnAllProducts(this.category!);
  }

  public navigateById(id: string | null) {
    return this.imageClicked.emit(id);
  }

  public onAddToCartClicked(id: string | null) {
    this.addToCartClicked.emit(id);
    console.log(id);
  }

  public addToCart(product: CartModel) {
    this.cartService.addCartModel(product);
  }
}
