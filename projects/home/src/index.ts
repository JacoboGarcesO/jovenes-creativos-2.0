import { Routes } from "@angular/router";
import { LayoutMainComponent } from "./infrastructure/ui/layouts/layout-main/layout-main.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./infrastructure/adapters/input/header-input-adapter/header-input-adapter.component').then(m => m.HeaderInputAdapterComponent),
        outlet: 'header'
      },
      {
        path: '',
        loadComponent: () => import('./infrastructure/adapters/input/hero-input-adapter/hero-input-adapter.component').then(m => m.HeroInputAdapterComponent),
        outlet: 'hero'
      },
      {
        path: '',
        loadComponent: () => import('./infrastructure/adapters/input/courses-input-adapter/courses-input-adapter.component').then(m => m.CoursesInputAdapterComponent),
        outlet: 'courses'
      }
    ]
  }
];
