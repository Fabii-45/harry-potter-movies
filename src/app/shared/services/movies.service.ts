import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { Constants } from '../utils/constants';

interface MovieDTO {
  id: string;
  title: string;
  duration: string;
  budget: string;
  release_date: string;
}

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly httpClient = inject(HttpClient);

  getMovies(): Observable<Movie[]> {
    return this.httpClient
      .get<MovieDTO[]>(Constants.API_URLS.MOVIES)
      .pipe(
        map((movies: MovieDTO[]) =>
          movies.map(
            ({ id, title, duration, budget, release_date }) =>
              new Movie(id, title, duration, budget, release_date)
          )
        )
      );
  }
}
