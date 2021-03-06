import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SingleMovieResolver } from '../services/resolvers/single-movie.resolver';
import { MovieListResolver } from '../services/resolvers/movie-list.resolver';

@NgModule({
    declarations: [
        MovieComponent,
        MoviesComponent,
        MovieSearchComponent,
        MovieDetailsComponent      
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports: [

    ],
    providers: [SingleMovieResolver, MovieListResolver]
})

export class AppMoviesModule { }