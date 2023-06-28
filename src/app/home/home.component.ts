import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public products$ = this.productService.products$;

  public category!: string | null;
  public categorySubscription!: Subscription;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    // metodo que esta se inscrevendo na rota para obter o parametro (categoria)
    this.categorySubscription = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.category = params.get('category');
        console.log(this.category);

        this.productService.returnAllProducts(this.category);
      }
    );
  }

  // navega para a tela de detalhe atraves do ID
  public navigateById(id: string | null) {
    return this.router.navigate([`products/details/${id}`]);
  }
}
