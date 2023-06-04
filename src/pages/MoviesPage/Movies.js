import { useState } from "react";

import styles from "./Movies.module.css";
import Form from "../../components/Form/Form";
import fetchFilmByQuery from "../../utils/fetchFilmByQuery";
import replaceImage from "./replacerImg.jpeg";

// const APIKey = "27c06349f21453208f65a00800d34cca";

export default function Movies() {
	const [movies, setMovies] = useState([]);

	const onFormSubmit = ({ movie }) => {
		fetchFilmByQuery(movie).then(({ results }) => setMovies(results));
	};

	// ! onError function for images
	const handleReplaceImg = (error) => {
		//replacement of broken Image
		error.target.src = replaceImage;
	};

	console.log(movies);

	return (
		<div>
			<h1 className={styles.moviesHeading}>Movies</h1>

			<Form onFormSubmit={onFormSubmit} />

			<ul className={styles.moviesList}>
				{movies &&
					movies.map((movie) => (
						<li key={movie.id} className={styles.movieCard}>
							<h1 className={styles.movieHeading}>{movie.original_title}</h1>
							<img
								src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
								className={styles.movieImg}
								onError={handleReplaceImg}
								alt="Ooops, url is broken"
							/>
						</li>
					))}
			</ul>
		</div>
	);
}
