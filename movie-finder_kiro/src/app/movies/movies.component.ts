import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../services/movie.service';     // !!!!
import  Movie  from '../models/Movie';     // !!!!
import  { Subscription }  from 'rxjs';     // !!!!

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy{
  popularMovies: Movie[];
  inTheaterMovies: Movie[];
  popularKidsMovies: Movie[];
  bestDramaMovies: Movie[];

  popularMovieSub: Subscription;
  inTheaterMoviesSub: Subscription;
  popularKidsMoviesSub: Subscription;
  bestDramaMoviesSub: Subscription;

  constructor(private moviesService: MovieService) { }     // !!!!  private moviesService: MovieService

  ngOnInit() {
    this.popularMovieSub = this.moviesService.getPopularMivies().subscribe( data => {
      this.popularMovies = data;
    });

    this.inTheaterMoviesSub = this.moviesService.getInTheaterMovies().subscribe( data => {
      this.inTheaterMovies = data;
    });

    this.popularKidsMoviesSub = this.moviesService.getPopularKidsMovies().subscribe( data => {
      this.popularKidsMovies = data;
    });

    this.bestDramaMoviesSub = this.moviesService.getBestDramaMovies().subscribe( data => {
      this.bestDramaMovies = data;
    });
    
  }

  ngOnDestroy(){
    this.popularMovieSub.unsubscribe();
    this.inTheaterMoviesSub.unsubscribe();
    this.popularKidsMoviesSub.unsubscribe();
    this.bestDramaMoviesSub.unsubscribe();
  }

}
