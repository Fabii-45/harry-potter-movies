import { Component, inject } from '@angular/core';
import { Movie } from '../../shared/models/movie.model';
import { MoviesService } from '../../shared/services/movies.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BudgetPipe } from '../../shared/pipes/budget.pipe';
import { DurationPipe } from '../../shared/pipes/duration.pipe';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [RouterModule, BudgetPipe, DurationPipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  public movie: Movie | null = null;

  private moviesService = inject(MoviesService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.moviesService.getMovieById(movieId).subscribe((movie) => {
        this.movie = movie;
      });
    }
  }
}
