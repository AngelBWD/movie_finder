import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SingleMovieResolver } from './services/resolvers/single-movie.resolver';
import { MovieListResolver } from './services/resolvers/movie-list.resolver';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'movies' },
  { path: 'movies', component: MoviesComponent, resolve: { movies: MovieListResolver } },
  { path: 'movies/search', component: MovieSearchComponent },
  { path: 'movies/:id', component: MovieDetailsComponent, resolve: { singleMovie: SingleMovieResolver } },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
