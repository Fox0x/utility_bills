import React from "react";
import css from "./StyledInput.module.css";

export default function StyledInput(props) {
	return <input type="number" className={css.styledInput} {...props}></input>;
}
