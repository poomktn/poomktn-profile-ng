import { Routes } from '@angular/router';
import { GoogleMap, Main } from '../components';

export const routes: Routes = [
  {path: '', component: Main},
  {path: 'map', component: GoogleMap}
];
