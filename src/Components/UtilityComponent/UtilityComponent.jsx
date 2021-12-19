import React from "react";
import css from "./UtilityComponent.module.css";
import UtilityForm from "../UtilityForm/UtilityForm";
import UtilityGraph from "../UtilityGraph/UtilityGraph";
import PrevMonthData from "../PrevMonthData/PrevMonthData";

export default function UtilityComponent() {
	return (
		<div className="utility__wrapper">
			<div className={css.form__wrapper}>
                <PrevMonthData/>
				<UtilityForm />
			</div>
            <div className={css.graph__wrapper}>
                <UtilityGraph/>
            </div>
		</div>
	);
}
