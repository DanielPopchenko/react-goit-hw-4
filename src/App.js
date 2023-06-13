import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';

import { lazy } from 'react';
import fetchPopularFilms from './utils/fetchPopularFilms';

const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Movies = lazy(() => import('./pages/MoviesPage/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const PopularMovieDetails = lazy(() => import('./pages/MovieDetails/PopularMovieDetails'));
const MovieCast = lazy(() => import('./pages/MovieCast/MovieCast'));
const PopularMovieCast = lazy(() => import('./pages/MovieCast/PopularMovieCast'));
const PopularMoviesReviews = lazy(() => import('./pages/Reviews/PopularMovieReviews'));
const MoviesReviews = lazy(() => import('./pages/Reviews/MoviesReviews'));
const NotFoundView = lazy(() => import('./pages/NotFoundView/NotFoundView'));

function App() {
  const [popularMovies, setPopularMovies] = useState(
    JSON.parse(window.localStorage.getItem('popularMovies')),
  );

  const firstRender = useRef(true);

  useEffect(() => {
    fetchPopularFilms().then(({ results }) => setPopularMovies(results));
  }, []);

  // Если первый рендер, то сетим уже зафетченные фильмы в LS
  if (firstRender.current) {
    window.localStorage.setItem('popularMovies', JSON.stringify(popularMovies));
    console.log('setting items');
    firstRender.current = false;
  }

  return (
    <>
      <Navigation />

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage popularMovies={popularMovies} />}></Route>
          <Route path="/:popularMovieId" element={<PopularMovieDetails />}>
            <Route path="cast" element={<PopularMovieCast />}></Route>
            <Route path="reviews" element={<PopularMoviesReviews />}></Route>
          </Route>

          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />}></Route>
            <Route path="reviews" element={<MoviesReviews />}></Route>
          </Route>

          <Route path="*" element={<NotFoundView />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
