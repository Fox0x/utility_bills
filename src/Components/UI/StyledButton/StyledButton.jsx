import React from "react";
import css from "./StyledButton.module.css";

export default function StyledButton({ props, onClick, children }) {
	return (
		<button className={css.styledButton} {...props} onClick={onClick}>
			{children}
		</button>
	);
}
