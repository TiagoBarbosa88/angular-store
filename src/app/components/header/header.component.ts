import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ToogleThemeService } from 'src/app/services/toogle-theme.service';
import { Category } from 'src/app/shared/model/products';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public showNavigation = true;

  constructor(
    public toogleThemeService: ToogleThemeService,
    public cartService: CartService,
    private router: Router,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.navigationService.showNavigation$.subscribe((showNavigation) => {
      this.showNavigation = showNavigation;
    });
  }

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

  public navigateToLogin() {
    this.navigationService.updateShowNavigationState(false);

    this.router.navigate(['/auth/login']);
  }

  /*   public navigateToLogin(){
    this.showNavigation = false

    if(this.showNavigation === false) {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.router.navigate(['/auth/login'])
        console.log(this.showNavigation);

      })
    } else {
      this.showNavigation == true;
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.router.navigate(['products'])
        console.log(this.showNavigation);
      })
    }
  }
 */
  /*
  public navigateToLogin(){
    this.showNavigation = false
    const currtenUrl = this.router.url

    if(this.showNavigation === false ){
      this.router.navigate(['/auth/login'])
      console.log(currtenUrl);

    } else {
      this.showNavigation = true
      this.router.navigate(['/products'])
      console.log('mudei');
    }
  }

 */
}
