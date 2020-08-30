import { Injectable } from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { merge, forkJoin } from 'rxjs'
import Movie from '../../models/Movie';
import { MovieService } from '../movie.service';



@Injectable()
export class MovieListResolver implements Resolve<Movie[]> {

    constructor(
        private movieService: MovieService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return forkJoin(
            this.movieService.getInTheaterMovies(),
            this.movieService.getPopularMivies(),
            this.movieService.getPopularKidsMovies(),
            this.movieService.getBestDramaMovies()
        );
    }

}
