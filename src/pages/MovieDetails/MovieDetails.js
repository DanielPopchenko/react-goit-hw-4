import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import fetchMovieByID from '../../utils/fetchMovieByID';
import { handleReplaceImg } from '../MoviesPage/Movies';
import fetchMovieCast from '../../utils/fetchMovieCast';

import styles from './MovieDetails.module.css';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchMovieByID(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  console.log(movie);

  fetchMovieCast(movieId).then(console.log);

  return (
    <div className={styles.movieDetailsContainer}>
      {movie && (
        <>
          <button className={styles.goBackBtn} type="button" onClick={handleGoBack}>
            Go back
          </button>
          <h1 className={styles.movieHeading}>{movie.original_title}</h1>
          <img
            className={styles.movieImg}
            src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="Ooops, img url is broken!"
            onError={handleReplaceImg}
          />

          <div className={styles.contolls}>
            {movie.homepage && (
              <a href={movie.homepage} className={styles.movieHomePageLink}>
                To film home page
              </a>
            )}

            <Link to={`/movies/${movieId}/cast`} className={styles.movieCastBtn}>
              See the cast
            </Link>

            <Link to={`/movies/${movieId}/reviews`} className={styles.movieCastBtn}>
              Reviews
            </Link>
          </div>
        </>
      )}
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
