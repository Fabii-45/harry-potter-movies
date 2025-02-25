import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/services/movies.service';
import { Movie } from '../../shared/models/movie.model';
import { BudgetPipe } from '../../shared/pipes/budget.pipe';
import { DurationPipe } from '../../shared/pipes/duration.pipe';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [BudgetPipe, DurationPipe],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
})
export class MoviesListComponent implements OnInit {
  private readonly moviesService = inject(MoviesService);

  movies: Movie[] = [];

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }
}
