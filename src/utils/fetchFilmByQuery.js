export default function fetchFilmByQuery(movie) {
	console.log(movie);
	return fetch(
		`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=27c06349f21453208f65a00800d34cca`
	).then((res) => res.json());
}
