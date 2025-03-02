import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/services/movies.service';
import { Movie } from '../../shared/models/movie.model';
import { BudgetPipe } from '../../shared/pipes/budget.pipe';
import { DurationPipe } from '../../shared/pipes/duration.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [FormsModule, RouterModule, BudgetPipe, DurationPipe],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
})
export class MoviesListComponent implements OnInit {
  private readonly moviesService = inject(MoviesService);

  private movies: Movie[] = [];
  public filteredMovies: Movie[] = [];
  public titleFilter: string = '';
  public yearFilter: string = '';

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((data) => {
      this.movies = data;
      this.filteredMovies = this.movies;
    });
  }

  public applyFilters(): void {
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
