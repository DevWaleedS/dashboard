import React from 'react';
import systemUasge from '../assets/Icons/systemUasge.png';

import { FaCircle } from 'react-icons/fa';
const SystemUsesChart = () => {
	return (
		<div className='row d-flex align-items-center wid'>
			<div className='col-6'>
				<img src={systemUasge} alt />
			</div>
			<div className='col-6 d-flex justify-content-end'>
				<ul>
					<li className='legend-list mb-3 '>
						<FaCircle />
						<span className='me-2'>15% تابلت</span>
					</li>
					<li className='legend-list mb-3 '>
						<FaCircle />
						<span className='me-2'>35% لابتوب</span>
					</li>
					<li className='legend-list '>
						<FaCircle />
						<span className='me-2'>50% موبايل</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SystemUsesChart;
