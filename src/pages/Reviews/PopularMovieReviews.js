import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieReviews from '../../utils/fetchMovieReviews';
import styles from './Reviews.module.css';
import { BsFillPersonFill } from 'react-icons/bs';

export default function Reviews() {
  const { popularMovieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(popularMovieId).then(({ results }) => setReviews(results));
  }, [popularMovieId]);

  return (
    <div className={styles.reviewsContainer}>
      <ul className={styles.reviewsList}>
        {reviews &&
          reviews.map((review) => (
            <li className={styles.reviewsListItem} key={review.id}>
              <p className={styles.userName}>
                {<BsFillPersonFill className={styles.userLogo} />}User -{' '}
                {review.author_details.username}
              </p>
              <p>{review.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
