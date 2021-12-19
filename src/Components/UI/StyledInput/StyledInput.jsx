import React from "react";
import css from "./StyledInput.module.css";

export default function StyledInput(props) {
	return (
		<input
			type="text"
			className={css.styledInput}
			{...props}></input>
	);
}
