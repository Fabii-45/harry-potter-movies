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
  box_office?: string;
  cinematographers?: string[];
  poster?: string;
  producers?: string[];
  summary?: string;
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
            (movie) =>
              new Movie(
                movie.id,
                movie.title,
                movie.duration,
                movie.budget,
                movie.release_date
              )
          )
        )
      );
  }

  getMovieById(movieId: string): Observable<Movie> {
    return this.httpClient
      .get<MovieDTO>(`${Constants.API_URLS.MOVIES}/${movieId}`)
      .pipe(
        map(
          (movie) =>
            new Movie(
              movie.id,
              movie.title,
              movie.duration,
              movie.budget,
              movie.release_date,
              movie.box_office,
              movie.cinematographers ?? [],
              movie.poster,
              movie.producers ?? [],
              movie.summary
            )
        )
      );
  }
}
