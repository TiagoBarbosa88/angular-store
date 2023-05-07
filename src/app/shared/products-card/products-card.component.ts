import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductsService } from '../../services/products.service';
import { Products } from '../model/products';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss'],
})
export class ProductsCardComponent implements OnInit {


  @Input() products$!: Observable<Products[]>;
  @Output() imageClicked = new EventEmitter();

  @Output() addToCartClicked  = new EventEmitter();

  constructor(private productsService: ProductsService
    ) {}

  public ngOnInit() {
    this.productsService.returnAllProducts();
  }

  public navigateById(id: string | null) {
    return this.imageClicked.emit(id);
  }

  public onAddToCartClicked(id: string | null){
    this.addToCartClicked.emit(id)
    console.log(id);

  }


}
