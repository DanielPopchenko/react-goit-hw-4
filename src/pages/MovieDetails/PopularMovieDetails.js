import { useState, useEffect, Suspense } from 'react';

import { useNavigate, useParams, Link, Outlet } from 'react-router-dom';
import fetchMovieByID from '../../utils/fetchMovieByID';
import { handleReplaceImg } from '../MoviesPage/Movies';
import styles from './MovieDetails.module.css';

export default function PopularMovieDetails() {
  const navigate = useNavigate();
  const { popularMovieId } = useParams();
  const [popularMovie, setPopularMovie] = useState(null);

  useEffect(() => {
    fetchMovieByID(popularMovieId).then((popularMovie) => setPopularMovie(popularMovie));
  }, [popularMovieId]);

  //   console.log(popularMovie);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.movieDetailsContainer}>
      {popularMovie && (
        <>
          <h1 className={styles.movieHeading}>{popularMovie.original_title}</h1>
          <img
            src={`http://image.tmdb.org/t/p/w500/${popularMovie.backdrop_path}`}
            alt="Ooops, img url is broken!"
            onError={handleReplaceImg}
            className={styles.movieImg}
          />

          <div className={styles.contolls}>
            {popularMovie.homepage && (
              <a href={popularMovie.homepage} className={styles.movieHomePageLink}>
                To film home page
              </a>
            )}

            <Link to={`/${popularMovieId}/cast`} className={styles.movieCastBtn}>
              See the cast
            </Link>

            <Link to={`/${popularMovieId}/reviews`} className={styles.movieCastBtn}>
              Reviews
            </Link>
          </div>

          <button className={styles.goBackBtn} type="button" onClick={handleGoBack}>
            Go back
          </button>
        </>
      )}

      <Suspense fallback={<div>Loading subpage ...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
