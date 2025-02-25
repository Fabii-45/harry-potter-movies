import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/services/movies.service';
import { Movie } from '../../shared/models/movie.model';
import { BudgetPipe } from '../../shared/pipes/budget.pipe';
import { DurationPipe } from '../../shared/pipes/duration.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [FormsModule, BudgetPipe, DurationPipe],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
})
export class MoviesListComponent implements OnInit {
  private readonly moviesService = inject(MoviesService);

  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  titleFilter: string = '';
  yearFilter: string = '';

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((data) => {
      this.movies = data;
      this.filteredMovies = this.movies;
    });
  }

  applyFilters(): void {
    this.filteredMovies = this.movies.filter((movie) => {
      const matchesTitle = this.titleFilter
        ? movie.title.toLowerCase().includes(this.titleFilter.toLowerCase())
        : true;
      const matchesYear = this.yearFilter
        ? movie.releaseDate.includes(this.yearFilter)
        : true;
      return matchesTitle && matchesYear;
    });
  }
}
