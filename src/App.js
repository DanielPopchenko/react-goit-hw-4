import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import Movies from "./pages/MoviesPage/Movies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

import fetchPopularFilms from "./utils/fetchPopularFilms";

function App() {
	const [popularMovies, setPopularMovies] = useState(
		JSON.parse(window.localStorage.getItem("popularMovies"))
	);

	const firstRender = useRef(true);

	useEffect(() => {
		fetchPopularFilms().then(({ results }) => setPopularMovies(results));
	}, []);

	// Если первый рендер, то сетим уже зафетченные фильмы в LS
	if (firstRender.current) {
		window.localStorage.setItem("popularMovies", JSON.stringify(popularMovies));
		console.log("setting items");
		firstRender.current = false;
	}

	return (
		<>
			<Navigation />
			<div className="container">
				<Routes>
					<Route
						path="/"
						element={<HomePage popularMovies={popularMovies} />}
					></Route>
					<Route path="/movies" element={<Movies />}></Route>

					{/* ! Сделать маршрут на детали отдельного фильма ! */}

					<Route path="/movies/:movieId" element={<MovieDetails />}></Route>
				</Routes>
			</div>
		</>
	);
}

export default App;
