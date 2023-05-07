import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public id!: string | null;
  public idSubscription!: Subscription;

  public idSubject$ = this.productService.idSubject$;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.idSubscription = this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.productService.returnProductById(this.id);
  }
}
