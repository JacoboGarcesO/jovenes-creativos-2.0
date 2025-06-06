import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('home').then(m => m.routes)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
