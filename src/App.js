import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import Movies from './pages/MoviesPage/Movies';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import PopularMovieDetails from './pages/MovieDetails/PopularMovieDetails';
import MovieCast from './pages/MovieCast/MovieCast';
import PopularMovieCast from './pages/MovieCast/PopularMovieCast';
import PopularMoviesReviews from './pages/Reviews/PopularMovieReviews';
import NotFoundView from './pages/NotFoundView/NotFoundView';
import MoviesReviews from './pages/Reviews/MoviesReviews';

import fetchPopularFilms from './utils/fetchPopularFilms';

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
