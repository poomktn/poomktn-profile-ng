import { Routes } from '@angular/router';
import { Main } from '../components';

export const routes: Routes = [
  { path: '', component: Main },
  {
    path: '**',
    redirectTo: () => {
      return '/';
    },
  },
];
