import React from "react";
import css from "./PrevMonthData.module.css";
import StyledInput from "../UI/StyledInput/StyledInput";

export default function PrevMonthData() {
	const [prevMonthData] = React.useState(() => {
		const date = `${new Date().getMonth() - 1}/${new Date().getFullYear()}`;
		return JSON.parse(localStorage.getItem(date));
	});

	if (!prevMonthData) {
		return null;
	}

	return (
		<div className={css.data__table}>
			<h3 className={css.data__header}>{prevMonthData.date}</h3>
			<StyledInput
				disabled
				placeholder={"Холодная вода: " + prevMonthData.coldWater}
			/>
			<StyledInput
				disabled
				placeholder={"Горячая вода: " + prevMonthData.hotWater}
			/>
			<StyledInput
				disabled
				placeholder={"Электричество: " + prevMonthData.electricity}
			/>
			<StyledInput
				disabled
				placeholder={"Отопление: " + prevMonthData.heating}
			/>
			<StyledInput disabled placeholder={"Газ: " + prevMonthData.gas} />
			<StyledInput
				disabled
				placeholder={"Водоотведение: " + prevMonthData.sewage}
			/>
			<StyledInput
				disabled
				placeholder={"Мусор: " + prevMonthData.garbage}
			/>
		</div>
	);
}
