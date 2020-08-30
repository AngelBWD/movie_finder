import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../services/movie.service';
import MovieDetails from '../models/Movie-Details';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  id: string;
  movie: MovieDetails;
  movieGenres: string;

  constructor(
    private moviesService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; //Вариант 1        //resolver-ите спестяшат този код
    this.route.params                           //Вариант 2        //resolver-ите спестяшат този код
      .subscribe((params: Params) => {          //Вариант 2        //resolver-ите спестяшат този код
        this.id = params['id'];                 //Вариант 2        //resolver-ите спестяшат този код
      });                                       //Вариант 2        //resolver-ите спестяшат този код
                                                                
      this.moviesService                                           //resolver-ите спестяшат този код
      .getMoviebyId(this.id)                                       //resolver-ите спестяшат този код
      .subscribe((data) => {                                       //resolver-ите спестяшат този код
        this.movie = data;                                         //resolver-ите спестяшат този код
        this.movieGenres = this.movie.genres
         .map(el => el['name'])
         .join(' ');
      });                                                          //resolver-ите спестяшат този код
    }                                                              //resolver-ите спестяшат този код

}
