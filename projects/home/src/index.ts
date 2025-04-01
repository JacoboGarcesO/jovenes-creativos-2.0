import { Routes } from "@angular/router";
import { LayoutMainComponent } from "./components/layouts/layout-main/layout-main.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./components/blocks/header/header.component').then(m => m.HeaderComponent),
        outlet: 'header'
      },
      {
        path: '',
        loadComponent: () => import('./components/blocks/hero/hero.component').then(m => m.HeroComponent),
        outlet: 'hero'
      },
      {
        path: '',
        loadComponent: () => import('./components/blocks/footer/footer.component').then(m => m.FooterComponent),
        outlet: 'footer'
      }
    ]
  }
];
