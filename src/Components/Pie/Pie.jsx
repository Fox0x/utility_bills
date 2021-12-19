import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const bill =
	JSON.parse(
		localStorage.getItem(
			`${new Date().getMonth()}/${new Date().getFullYear()}`
		)
	) || [];

const data = [
	{ name: "Холодная вода", value: parseInt(bill.coldWater) },
	{ name: "Горячая вода", value: parseInt(bill.hotWater) },
	{ name: "Отопление", value: parseInt(bill.heating) },
	{ name: "Электричество", value: parseInt(bill.electricity) },
	{ name: "Газ", value: parseInt(bill.gas) },
	{ name: "Водоотведение", value: parseInt(bill.sewage) },
	{ name: "Мусор", value: parseInt(bill.garbage) },
];

const COLORS = [
	"#8884D8",
	"#85A7BB",
	"#84B9AC",
	"#82CA9D",
	"#A2C98C",
	"#C1C87B",
	"#FFC658",
];

const renderActiveShape = (props) => {
	const RADIAN = Math.PI / 180;
	const {
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		startAngle,
		endAngle,
		fill,
		payload,
		percent,
		value,
	} = props;
	const sin = Math.sin(-RADIAN * midAngle);
	const cos = Math.cos(-RADIAN * midAngle);
	const sx = cx + (outerRadius + 10) * cos;
	const sy = cy + (outerRadius + 10) * sin;
	const mx = cx + (outerRadius + 30) * cos;
	const my = cy + (outerRadius + 30) * sin;
	const ex = mx + (cos >= 0 ? 1 : -1) * 22;
	const ey = my;
	const textAnchor = cos >= 0 ? "start" : "end";

	return (
		<g>
			<text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
				{payload.name}
			</text>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<Sector
				cx={cx}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={outerRadius + 6}
				outerRadius={outerRadius + 10}
				fill={fill}
			/>
			<path
				d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
				stroke={fill}
				fill="none"
			/>
			<circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 12}
				y={ey}
				textAnchor={textAnchor}
				fill="#ffffff70">{`${value}₽ (${(percent * 100).toFixed(
				2
			)}%)`}</text>
		</g>
	);
};

export default class Example extends PureComponent {
	state = {
		activeIndex: 1,
	};

	onPieEnter = (_, index) => {
		this.setState({
			activeIndex: index,
		});
	};

	render() {
		return (
			<ResponsiveContainer width="50%" height="90%">
				<PieChart>
					<Pie
						activeIndex={this.state.activeIndex}
						activeShape={renderActiveShape}
						data={data}
						cx="50%"
						cy="50%"
						innerRadius={90}
						outerRadius={200}
						fill="#ffffff70"
						dataKey="value"
						onMouseEnter={this.onPieEnter}>
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
		);
	}
}
