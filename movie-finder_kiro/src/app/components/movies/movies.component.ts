import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../../services/movie.service';     // !!!!
import  Movie  from '../../models/Movie';     // !!!!
import  { Subscription }  from 'rxjs';     // !!!!
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMovies: Movie[];
  inTheaterMovies: Movie[];
  popularKidsMovies: Movie[];
  bestDramaMovies: Movie[];

  popularMovieSub: Subscription;
  inTheaterMoviesSub: Subscription;
  popularKidsMoviesSub: Subscription;
  bestDramaMoviesSub: Subscription;

  constructor(
    private moviesService: MovieService,
    private route: ActivatedRoute
    ) { }     // !!!!  private moviesService: MovieService

  ngOnInit() {
    const [drama, kids, popular, theaters] = this.route.snapshot.data['movies']; //movies е от app-routing.module.ts
    this.bestDramaMovies = drama;
    this.popularKidsMovies = kids;
    this.popularMovies = popular;
    this.inTheaterMovies = theaters;
    
  }
}
