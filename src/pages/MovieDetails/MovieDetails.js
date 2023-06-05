import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import fetchMovieByID from "../../utils/fetchMovieByID";
import { handleReplaceImg } from "../MoviesPage/Movies";

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

	return (
		<div>
			{movie && (
				<>
					<button type="button" onClick={handleGoBack}>
						Go back
					</button>
					<h1>{movie.original_title}</h1>
					<img
						src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
						alt="Ooops, img url is broken!"
						onError={handleReplaceImg}
					/>
				</>
			)}
		</div>
	);
}
