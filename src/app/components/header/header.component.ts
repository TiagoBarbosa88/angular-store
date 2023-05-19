import { Component } from '@angular/core';
import { Category } from 'src/app/shared/model/products';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
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
