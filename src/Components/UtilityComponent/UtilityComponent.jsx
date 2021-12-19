import React from "react";
import css from "./UtilityComponent.module.css";
import UtilityForm from "../UtilityForm/UtilityForm";
import Chart from "../Chart/Chart";
import PrevMonthData from "../PrevMonthData/PrevMonthData";
import Pie from "../Pie/Pie";

export default function UtilityComponent() {
	return (
		<div className="utility__wrapper">
			<div className={css.form__wrapper}>
				<PrevMonthData />
				<UtilityForm />
			</div>
			<div className={css.graph__wrapper}>
				<Chart />
				<Pie />
			</div>
		</div>
	);
}
