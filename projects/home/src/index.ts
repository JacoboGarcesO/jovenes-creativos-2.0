import { Routes } from "@angular/router";
import { LayoutMainComponent } from "./components/layouts/layout-main/layout-main.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./containers/header-container/header-container.component').then(m => m.HeaderContainerComponent),
        outlet: 'header'
      },
      {
        path: '',
        loadComponent: () => import('./containers/hero-container/hero-container.component').then(m => m.HeroContainerComponent),
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
