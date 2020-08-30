import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import Movie from '../models/Movie';
import MovieDetails from '../models/Movie-Details';


const BASE_URL = 'https://api.themoviedb.org/3/';
const IN_THEATERS = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
const POPULAR = 'discover/movie?sort_by=popularity.desc';
const KIDS = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
const BEST_DRAMA = 'discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10';

const API_KEY = '&api_key=5bc9a2d68ab2de69971d183a645eb742';
const API_KEY_ALT = '?api_key=5bc9a2d68ab2de69971d183a645eb742';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(
    private http: HttpClient
    ) { }

  getPopularMivies() {
    return this.http.get<Movie[]>(BASE_URL + POPULAR + API_KEY)
    .pipe(
       map((data) => data['results'].slice(0, 6))
    );
  }

  getInTheaterMovies() { 
    return this.http.get<Movie[]>(BASE_URL + IN_THEATERS + API_KEY)
    .pipe(
      map((data) => data['results'].slice(0, 6))
   );
  }

  getPopularKidsMovies() { 
    return this.http.get<Movie[]>(BASE_URL + KIDS + API_KEY)
    .pipe(
      map((data) => data['results'].slice(0, 6))
   );
  }

  getBestDramaMovies() { 
    return this.http.get<Movie[]>(BASE_URL + BEST_DRAMA + API_KEY)
    .pipe(
      map((data) => data['results'].slice(0, 6))
   );
  }

  getMoviebyId(id: string) {
    return this.http.get<MovieDetails>(BASE_URL + `movie/${id}` + API_KEY_ALT)
  }
  
}
