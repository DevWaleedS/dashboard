import React from 'react';

import lineChart from '../assets/Icons/lineChart.png';
import LineChartImage from './LineChartImage';
import LineChartsTitle from './LineChartsTitle';

const OrdersCharts = ({ title, avg, lineChartImage }) => {
	return (
		<div className='row'>
			<div className='col-1'>
				<ul className='amounts  list-unstyled'>
					<li className='amount'>$8k</li>
					<li className='amount'>$5k</li>
					<li className='amount'>$2k</li>
					<li className='amount'>$0</li>
					<li className='amount'>$2k</li>
					<li className='amount'>$5k</li>
					<li className='amount'>$8k</li>
				</ul>
			</div>
			<div className='col-11'>
				<LineChartsTitle title='احصائيات المتاجر' avg='Avg. $5 $8k' />
				<LineChartImage lineChartImage={lineChart} />
			</div>
		</div>
	);
};

export default OrdersCharts;
