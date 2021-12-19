import React from "react";
import css from "./UtilityForm.module.css";
import StyledInput from "../UI/StyledInput/StyledInput";
import StyledButton from "../UI/StyledButton/StyledButton";

export default function UtilityForm() {
	const id = `${new Date().getMonth()}/${new Date().getFullYear()}`;
	const [utility, setUtility] = React.useState(() => {
		return (JSON.parse(localStorage.getItem(id)) || {
			coldWater: "",
			hotWater: "",
			heating: "",
			electricity: "",
			gas: "",
			sewage: "",
			garbage: "",
		});
	});

	const [currentDate] = React.useState(() => {
		return new Intl.DateTimeFormat("ru-Ru", {
			month: "long",
			year: "numeric",
		})
			.format(new Date())
			.slice(0, -3);
	});

	const saveBills = (event) => {
		event.preventDefault();
		localStorage.setItem(
			id,
			JSON.stringify({ date: currentDate, ...utility })
		);
	};

	return (
		<form className={css.form} onSubmit={saveBills}>
				<h2 className={css.form__header}>{currentDate}</h2>
				<StyledInput
					placeholder="Холодная вода"
					value={utility.coldWater}
					onChange={(e) =>
						setUtility({ ...utility, coldWater: e.target.value })
					}
				/>
				<StyledInput
					placeholder="Горячая вода"
					value={utility.hotWater}
					onChange={(e) =>
						setUtility({ ...utility, hotWater: e.target.value })
					}
				/>
				<StyledInput
					placeholder="Отопление"
					value={utility.heating}
					onChange={(e) =>
						setUtility({ ...utility, heating: e.target.value })
					}
				/>
				<StyledInput
					placeholder="Электроэнергия"
					value={utility.electricity}
					onChange={(e) =>
						setUtility({ ...utility, electricity: e.target.value })
					}
				/>
				<StyledInput
					placeholder="Газ"
					value={utility.gas}
					onChange={(e) =>
						setUtility({ ...utility, gas: e.target.value })
					}
				/>
				<StyledInput
					placeholder="Водоотведение"
					value={utility.sewage}
					onChange={(e) =>
						setUtility({ ...utility, sewage: e.target.value })
					}
				/>
				<StyledInput
					placeholder="Мусор"
					value={utility.garbage}
					onChange={(e) =>
						setUtility({ ...utility, garbage: e.target.value })
					}
				/>
				<StyledButton>✓</StyledButton>
			</form>
	);
}
