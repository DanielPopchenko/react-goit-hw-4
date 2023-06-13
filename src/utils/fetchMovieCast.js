const APIKey = "27c06349f21453208f65a00800d34cca";
// https://api.themoviedb.org/3/movie/{movie_id}/credits

export default function fetchMovieCast(movieId) {
	return fetch(
		`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${APIKey}`
	).then((res) => res.json());
}
