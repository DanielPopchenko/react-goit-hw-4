import React from "react";

import { useForm } from "react-hook-form";
import styles from "./Form.module.css";

// !! Стилизировать форму и инпут !!
// TODO: Разобраться с LocalStorage

export default function Form({ onFormSubmit, onBtnClick }) {
	const { register, handleSubmit } = useForm();

	return (
		<div className={styles.formContainer}>
			<form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
				<div className={styles.inputContainer}>
					<label className={styles.label}>Search movie</label>

					<input
						type="text"
						name="movie"
						{...register("movie")}
						className={styles.input}
					/>
				</div>

				<button type="submit" className={styles.button} onClick={onBtnClick}>
					Search
				</button>
			</form>
		</div>
	);
}
