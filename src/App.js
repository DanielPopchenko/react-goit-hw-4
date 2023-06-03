import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import Movies from "./pages/MoviesPage/Movies";

function App() {
	return (
		<>
			<Navigation />
			<div className="container">
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/movies" element={<Movies />}></Route>

					{/* ! Сделать маршрут на детали отдельного фильма ! */}

					<Route path="'/movies/:movieId'" element={<Movies />}></Route>
				</Routes>
			</div>
		</>
	);
}

export default App;
