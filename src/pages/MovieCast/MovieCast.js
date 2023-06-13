import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieCast.module.css';

import fetchMovieCast from '../../utils/fetchMovieCast';

import { handleReplaceImg } from '../MoviesPage/Movies';

export default function MovieCast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(({ cast }) => setMovieCast(cast));
  }, [movieId]);

  console.log(movieCast);

  return (
    <div className={styles.movieCast}>
      <ul className={styles.movieCastList}>
        {movieCast &&
          movieCast.map((cast) => (
            <li key={cast.credit_id} className={styles.actorCard}>
              <p className={styles.actorName}>
                {cast.name} / {cast.character}
              </p>
              <img
                src={`http://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                alt=""
                onError={handleReplaceImg}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
