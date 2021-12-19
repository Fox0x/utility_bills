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

const data = [
	{
		name: "Июнь",
		coldWater: 1030,
		hotWater: 2200,
		heating: 3340,
		electricity: 4020,
		gas: 1500,
		sewage: 600,
		garbage: 2780,
	},
	{
		name: "Июль",
		coldWater: 970,
		hotWater: 2190,
		heating: 3490,
		electricity: 4020,
		gas: 2300,
		sewage: 600,
		garbage: 2980,
	},
	{
		name: "Август",
		coldWater: 1030,
		hotWater: 2700,
		heating: 3400,
		electricity: 400,
		gas: 2000,
		sewage: 600,
		garbage: 2980,
	},
	{
		name: "Сентябрь",
		coldWater: 90,
		hotWater: 210,
		heating: 3490,
		electricity: 4020,
		gas: 2300,
		sewage: 700,
		garbage: 100,
	},
	{
		name: "Октябрь",
		coldWater: 1030,
		hotWater: 2200,
		heating: 3340,
		electricity: 4020,
		gas: 1500,
		sewage: 600,
		garbage: 2780,
	},
];

export default class Example extends PureComponent {
	render() {
		return (
			<ResponsiveContainer width="50%" height="50%">
				<LineChart
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}>
					<XAxis dataKey="date" stroke="#141F26" />
					<YAxis stroke="#141F26" />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="coldWater"
						stroke="#8884D8"
						strokeWidth={3}
					/>
					<Line
						type="monotone"
						dataKey="hotWater"
						stroke="#85A7BB"
						strokeWidth={3}
					/>
					<Line
						type="monotone"
						dataKey="heating"
						stroke="#84B9AC"
						strokeWidth={3}
					/>
					<Line
						type="monotone"
						dataKey="electricity"
						stroke="#82CA9D"
						strokeWidth={3}
					/>
					<Line
						type="monotone"
						dataKey="gas"
						stroke="#A2C98C"
						strokeWidth={3}
					/>
					<Line
						type="monotone"
						dataKey="sewage"
						stroke="#C1C87B"
						strokeWidth={3}
					/>
					<Line
						type="monotone"
						dataKey="garbage"
						stroke="#FFC658"
						strokeWidth={3}
					/>
				</LineChart>
			</ResponsiveContainer>
		);
	}
}
