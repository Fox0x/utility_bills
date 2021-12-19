import React from "react";
import css from "./UtilityComponent.module.css";
import UtilityForm from "../UtilityForm/UtilityForm";
import UtilityGraph from "../UtilityGraph/UtilityGraph";

export default function UtilityComponent() {
	return (
		<div className="utility__wrapper">
			<div className={css.form__wrapper}>
				<UtilityForm />
			</div>
            <div className={css.utility__graphs}>
                <UtilityGraph/>
            </div>
		</div>
	);
}
