import { Routes } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesListComponent },
  { path: '**', redirectTo: '/movies' },
];
