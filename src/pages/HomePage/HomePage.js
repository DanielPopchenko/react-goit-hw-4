import styles from "./HomePage.module.css";

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
				Here are the most popular movies at the moment: <span>{today}</span>
			</p>

			<ul className={styles.moviesList}>
				{popularMovies &&
					popularMovies.map((movie) => (
						<li key={movie.id} className={styles.movieCard}>
							<h1 className={styles.movieHeading}>{movie.original_title}</h1>
							<img
								src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
								alt="film preview"
								className={styles.movieImg}
							/>
						</li>
					))}
			</ul>
		</div>
	);
}
