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

// const data = [
//   {
//     name: 'Июнь',
//     uv: 4000,
//     pv: 2400,
//     amt: 9000,
//   },
//   {
//     name: 'Июль',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Август',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Сентябрь',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Октябрь',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Ноябрь',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Декабрь',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

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
    sewage:600,
    garbage: 2980,
	},
  {
    name: "Август",
    coldWater: 1030,
    hotWater: 2700,
    heating: 3400,
    electricity: 400,
    gas: 2000,
    sewage:600,
    garbage: 2980,
  },
  {
		name: "Сентябрь",
    coldWater: 90,
    hotWater: 210,
    heating: 3490,
    electricity: 4020,
    gas: 2300,
    sewage:700,
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
	static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

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
					<XAxis dataKey="name" stroke="#141F26" />
					<YAxis stroke="#141F26" />
					<Tooltip />
					<Legend />
					<Line type="monotone"dataKey="coldWater"stroke="#8884D8" strokeWidth={3}/>
					<Line type="monotone" dataKey="hotWater" stroke="#85A7BB" strokeWidth={3}/>
					<Line type="monotone" dataKey="heating" stroke="#84B9AC" strokeWidth={3}/>
          <Line type="monotone" dataKey="electricity" stroke="#82CA9D"strokeWidth={3}/>
          <Line type="monotone" dataKey="gas" stroke="#A2C98C"strokeWidth={3}/>
          <Line type="monotone" dataKey="sewage" stroke="#C1C87B" strokeWidth={3}/>
          <Line type="monotone" dataKey="garbage" stroke="#FFC658" strokeWidth={3}/>

				</LineChart>
			</ResponsiveContainer>
		);
	}
}
