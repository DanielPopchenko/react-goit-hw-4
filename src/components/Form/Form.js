import React from "react";

import { useForm } from "react-hook-form";
import styles from "./Form.module.css";

// !! Стилизировать форму и инпут !!
// TODO: Разобраться с LocalStorage

export default function Form({ onFormSubmit }) {
	const { register, handleSubmit } = useForm();

	return (
		<div className={styles.formContainer}>
			<form onSubmit={handleSubmit(onFormSubmit)}>
				<label className={styles.label}>
					Search movie
					<input type="text" name="movie" {...register("movie")} />
				</label>

				<button type="submit">Search</button>
			</form>
		</div>
	);
}
