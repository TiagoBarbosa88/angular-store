import { Component, OnInit } from '@angular/core';
import { ToogleThemeService } from '../services/toogle-theme.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  
  constructor(public darkMode: ToogleThemeService) {}

  ngOnInit() {}
}
