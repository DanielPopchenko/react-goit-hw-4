const APIKey = '27c06349f21453208f65a00800d34cca';

export default function fetchMovieReviews(movieId) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${APIKey}`).then(
    (res) => res.json(),
  );
}
