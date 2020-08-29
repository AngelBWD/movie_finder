import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';     // !!!!
import  Movie  from '../models/Movie';     // !!!!

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

  constructor(private moviesService: MovieService) { }     // !!!!  private moviesService: MovieService

  ngOnInit() {
    this.moviesService.getPopularMivies().subscribe( data => {
      this.popularMovies = data['results'].slice(0,6);
    });

    this.moviesService.getInTheaterMovies().subscribe( data => {
      this.inTheaterMovies = data['results'].slice(6,12);
    });
  }

}
