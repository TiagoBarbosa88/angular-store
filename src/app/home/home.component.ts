import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public products$ = this.productService.products$;

  constructor(
    private router: Router,
    private productService: ProductsService
  ) {}

  public ngOnInit() {}

  public event() {
    this.router.navigate(['products/details']);
  }
}
