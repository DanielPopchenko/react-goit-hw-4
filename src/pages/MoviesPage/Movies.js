import { useState } from "react";

import Form from "../../components/Form/Form";

const APIKey = "27c06349f21453208f65a00800d34cca";
export default function Movies() {
	const [movies, setMovies] = useState([]);

	const onFormSubmit = () => {
		fetch(
			`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${APIKey}`
		)
			.then((res) => res.json())
			.then(({ results }) => setMovies(results));
	};

	return (
		<div>
			<h1>Movies</h1>

			<Form onFormSubmit={onFormSubmit} />

			<ul>
				{movies &&
					movies.map((movie) => (
						<li key={movie.original_title}>
							<h1>{movie.original_title}</h1>
							<img
								src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
								alt="film preview"
							/>
						</li>
					))}
			</ul>
		</div>
	);
}
