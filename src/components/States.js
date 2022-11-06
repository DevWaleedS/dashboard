import React, { Fragment } from 'react';

import growth from '../assets/Icons/icon-32-growth.svg';
import income from '../assets/Icons/icon-32-income.svg';
import money from '../assets/Icons/icon-24-money.svg';
import DatePicker from './DatePicker';
import OrdersCharts from './OrdersCharts';

const States = () => {
	return (
		<Fragment>
			{/* date picker */}
			<div className='row mb-5'>
				<DatePicker />
			</div>

			{/* states container */}
			<div className='row'>
				<div className='col-9 '>
					<div className='img-st-box '>
					
							<div className='store-charts'>
								<OrdersCharts />
							</div>
				
					</div>
				</div>

				<div className='col-3'>
					<div className='row '>
						<div className='states-box mb-3'>
							<div className='icon'>
								<img src={income} alt='' />
							</div>
							<div className='text'>
								<h4 className='h4'>280</h4>

								<p>عدد المتاجر</p>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='states-box mb-3'>
							<div className='icon'>
								<img src={money} alt='' />
							</div>
							<div className='text'>
								<h4 className='h4'>1,250$</h4>

								<p>قيمة الاشتراكات</p>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='states-box mb-3'>
							<div className='icon'>
								<img src={growth} alt='' />
							</div>
							<div className='text'>
								<h4 className='h4'>+2.0%</h4>
								<p>الإيرادات </p>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='states-box '>
							<div className='icon'>
								<img src={money} alt='' />
							</div>
							<div className='text'>
								<h4 className='h4'>8,800$</h4>
								<p>اجمالي الإيرادات </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default States;
