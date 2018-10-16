import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

const data = function () {
	return {
		labels: [
			'Mirai',
			'Bashlite',
			'B2',
			'B4',
			'B5',
			'B6',
			'B7',
			'B8',
			'B9'
		],
		datasets: [{
			data: Array.from({ length: 9 }, () => Math.floor(Math.random() * 40)),
			backgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56',
				'#000',
				'#ff0',
				'#0005ff',
				'#696969',
				'#de091e',
				'#d82151'
			],
			hoverBackgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56',
				'#000',
				'#ff0',
				'#0005ff',
				'#696969',
				'#fde1ff',
				'#d82151'

			]
		}]
	}
};

class PieExample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: data
		};


		setInterval(() => {
			this.setState({
				data: data
			})
		}, 1000);

	}

	componentWillMount() {

	}

	render() {
		return (
			<div>

				<Pie data={this.state.data} height={720} width={700} />

			</div>
		);
	}
};

export default PieExample;
