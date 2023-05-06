import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id!: string | null
  idSubscription!: Subscription
  products = this.productService.products$;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    this.idSubscription = this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')
    })

    //this.productService.returnProductById(this.id)

  }

}
