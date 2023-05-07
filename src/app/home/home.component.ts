import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  id!: string | null;
  idSubscription!: Subscription;

  public products$ = this.productService.products$;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.idSubscription = this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
  }

  public navigateById(id: string | null) {
    return this.router.navigate([`products/details/${id}`]);
  }

 
}
