import React, { PureComponent } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const getDataFromLocalStorage = () => {
	const storage = { ...localStorage };
	const data = [];

	for (const key in storage) {
		const value = JSON.parse(storage[key]);
		data.push({
			id: value.id,
			date: value.date.charAt(0).toUpperCase() + value.date.slice(1, -5),
			Холодная: value.coldWater,
			Горячая: value.hotWater,
			Отопление: value.heating,
			Электричество: value.electricity,
			Газ: value.gas,
			Водоотведение: value.sewage,
			Мусор: value.garbage,
		});
	}
	data.sort((a, b) => a.id - b.id);
	data.length > 12 ?? (data.length = 12);
	return data;
};

export default class Example extends PureComponent {
	render() {
		return (
			<ResponsiveContainer width="50%" height="50%">
				<LineChart
					data={getDataFromLocalStorage()}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}>
					<XAxis dataKey="date" type="category" stroke="#ffffff70" />
					<YAxis stroke="#ffffff70" type="number" />
					<Tooltip />
					<Legend iconSize={10} />
					<Line
						type="monotone"
						dataKey="Холодная"
						stroke="#8884D8"
						strokeWidth={3}
					/>
					<Line
						type="monotone"
						dataKey="Горячая"
						stroke="#85A7BB"
						strokeWidth={3}
					/>
					<Line
						type="monotone"
						dataKey="Отопление"
						stroke="#84B9AC"
						strokeWidth={3}
					/>
					<Line
						type="monotone"
						dataKey="Электричество"
						stroke="#82CA9D"
						strokeWidth={3}
					/>
					<Line
						type="monotone"
						dataKey="Газ"
						stroke="#A2C98C"
						strokeWidth={3}
					/>
					<Line
						type="monotone"
						dataKey="Водоотведение"
						stroke="#C1C87B"
						strokeWidth={3}
					/>
					<Line
						type="monotone"
						dataKey="Мусор"
						stroke="#FFC658"
						strokeWidth={3}
					/>
				</LineChart>
			</ResponsiveContainer>
		);
	}
}
