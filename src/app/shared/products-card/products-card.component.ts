import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../model/products';


@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent implements OnInit {
  products$= this.productsService.products$;

  constructor(private productsService: ProductsService) { }

  ngOnInit(){
    this.productsService.returnAllProducts()
  }

}
