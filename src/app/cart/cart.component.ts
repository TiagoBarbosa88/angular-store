import { Component, OnInit } from '@angular/core';
import { ToogleThemeService } from '../services/toogle-theme.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public cartObservable$ = this.cartService.cartObservable$;


  constructor(
    public toogleThemeService: ToogleThemeService,
    public cartService: CartService
  ) {}

  ngOnInit() {
    
  }

}
