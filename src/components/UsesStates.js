import React from 'react';
import GeoCharts from './GeoCharts';
import GeoMapState from './GeoMapState';
import OrdersCharts from './OrdersCharts';
import SystemUsesChart from './SystemUsesChart';

const UsesStates = () => {
	return (
		<div className='row'>
			<div className='col-4'>
				<div className='uses-bx-sml'>
					<div className='title mb-4'>
						<h6 className='h6 fz bold-500'>إجمالي استخدام النظام</h6>
					</div>
					<div className='row'>
						<div className='charts-box'>
							<SystemUsesChart />
						</div>
					</div>
				</div>
			</div>
			<div className='col-8'>
				<div className='uses-bx-sml'>
					<div className='title mb-4'>
						<h6 className='h6 bold-500 fz brand-clr'> المناطق الأكثر اشتراكا</h6>
					</div>

					<div className='row'>
						<div className='charts-box'>
							<div className='row'>
								<div className='col-6'>
									<GeoMapState />
								</div>
								<div className='col-6'>
									<GeoCharts />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UsesStates;
