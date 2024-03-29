import styles from "./HomePage.module.css";
import { Link, useLocation } from "react-router-dom";

const today = new Date().toLocaleDateString("en-us", {
	weekday: "long",
	year: "numeric",
	month: "short",
	day: "numeric",
});

export default function HomePage({ popularMovies }) {
	return (
		<div className={styles.homePage}>
			<h1 className={styles.heading}>Search for films without troubles!</h1>
			<p className={styles.text}>
				Here are the most popular movies at the moment: <br />
				<span className={styles.date}>{today}</span>
			</p>

			<ul className={styles.moviesList}>
				{popularMovies &&
					popularMovies.map((movie) => (
						<li key={movie.id} className={styles.movieCard}>
							<Link to={`${movie.id}`}>
								<h1 className={styles.movieHeading}>{movie.original_title}</h1>
								<img
									src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
									alt="film preview"
									className={styles.movieImg}
								/>
							</Link>
						</li>
					))}
			</ul>
		</div>
	);
}
