import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const APIKey = "27c06349f21453208f65a00800d34cca";

// ! Сделать маршрут на детали отдельного фильма

export default function Form({ movies, onFormSubmit }) {
	const { register, handleSubmit } = useForm();

	console.log(movies);

	return (
		<div>
			<form onSubmit={handleSubmit(onFormSubmit)}>
				<label>
					Search movie <br />
					<input type="text" name="movie" {...register("movie")} />
				</label>

				<button type="submit">Search</button>
			</form>
		</div>
	);
}
