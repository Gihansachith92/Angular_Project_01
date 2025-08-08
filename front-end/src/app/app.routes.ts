import { Routes } from '@angular/router';
import { Master } from './components/master/master';

export const routes: Routes = [
  {
    path:'',
    redirectTo: 'master',
    pathMatch: 'full'
  },
  {
    path: 'master',
    component: Master
  }

];
