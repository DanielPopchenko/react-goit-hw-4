import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./Movies.module.css";
import Form from "../../components/Form/Form";
import fetchFilmByQuery from "../../utils/fetchFilmByQuery";
import replaceImage from "./replacerImg.jpeg";

// ! OnError function for images
export const handleReplaceImg = (error) => {
	//replacement of broken Image
	error.target.src = replaceImage;
};

export default function Movies() {
	const [movies, setMovies] = useState(
		JSON.parse(window.localStorage.getItem("movies"))
	);

	const { pathname } = useLocation();

	useEffect(() => {
		window.localStorage.setItem("movies", JSON.stringify(movies));
	}, [movies]);

	const onFormSubmit = ({ movie }) => {
		fetchFilmByQuery(movie).then(({ results }) => setMovies(results));
	};

	return (
		<div>
			<h1 className={styles.moviesHeading}>Movies</h1>

			<Form onFormSubmit={onFormSubmit} />

			<ul className={styles.moviesList}>
				{movies &&
					movies.map((movie) => (
						<li key={movie.id} className={styles.movieCard}>
							<Link to={`${pathname}/${movie.id}`} className={styles.movieLink}>
								<h1 className={styles.movieHeading}>{movie.original_title}</h1>
								<img
									src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
									className={styles.movieImg}
									onError={handleReplaceImg}
									alt="Ooops, url is broken"
								/>
							</Link>
						</li>
					))}
			</ul>
		</div>
	);
}
