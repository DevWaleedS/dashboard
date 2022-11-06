import React from 'react';
import lineChart from '../assets/Icons/lineChart-2.png';
import LineChartImage from './LineChartImage';

const StoreState = ({ lineChartImage }) => {
	return (
		<div className='row'>
			<div className='col-12'>
				<ul className='amounts  list-unstyled'>
					<li className='amount'>$8k</li>
					<li className='amount'>$5k</li>
					<li className='amount'>$2k</li>
					<li className='amount'>$0</li>
					<li className='amount'>$2k</li>
					<li className='amount'>$5k</li>
					<li className='amount'>$8k</li>
				</ul>
				<LineChartImage lineChartImage={lineChart} />
			</div>
		</div>
	);
};

export default StoreState;
