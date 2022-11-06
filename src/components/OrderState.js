import React, { Fragment } from 'react';
import DatePicker from './DatePicker';
import LineChartsTitle from './LineChartsTitle';
import StoreState from './StoreState';

const OrderState = ({ title, avg }) => {
	return (
		<Fragment>
			<div className='orders-states'>
				<div className='row mb-order-section'>
					<div className='col-6'>
						<LineChartsTitle title='احصائيات الطلبات' avg='250' />
					</div>
					<div className='col-6 '>
						<div className='custom-mt'>
							<DatePicker />
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='order-state-charts'>
						<StoreState />
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default OrderState;
