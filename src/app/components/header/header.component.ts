import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { ToogleThemeService } from 'src/app/services/toogle-theme.service';
import { Category } from 'src/app/shared/model/products';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public darkMode: ToogleThemeService,
    public cartService: CartService
  ) {}

  categories: Category[] = [
    {
      name: 'Electronics',
      link: 'products/category/electronics',
    },
    {
      name: 'Jewelery',
      link: 'products/category/jewelery',
    },
    {
      name: "Men's clothing",
      link: `products/category/men's clothing`,
    },
    {
      name: "Women's clothing",
      link: `products/category/women's clothing`,
    },
  ];
}
