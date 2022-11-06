import React, { Fragment } from 'react';
import { Counts, OrderState, States, Tables, UsesStates } from '../components';
import store from '../assets/Icons/icon-24-store.svg';
import user from '../assets/Icons/icon-24-user.svg';
import service from '../assets/Icons/icon-24-service.svg';

const Dashboard = () => {
	
	return (
		<Fragment>
			{/* counters Section*/}
			<div className='main'>
				<section className='counters-section'>
					<div className='row'>
						<div className='col-4'>
							<Counts counterTitle='عدد المتاجر' counterNumbers='170' counterPercent='20% +' image={store} bgColor='rgb(182 190 52 / 20%)' percentColor='#3ae374' />
						</div>
						<div className='col-4'>
							<Counts counterTitle='عدد المندوبين' counterNumbers='815' counterPercent='45% +' image={user} bgColor='rgb(2 70 106 / 10%)' percentColor='#3ae374' />
						</div>
						<div className='col-4'>
							<Counts counterTitle='عدد  الخدمات' counterNumbers='6' counterPercent='45% +' image={service} bgColor='rgb(255 0 0 / 10%)' percentColor='#ff3838' />
						</div>
					</div>
				</section>

				{/* States Section */}
				<section className='states mb-5'>
					<div className='container'>
						<States />
					</div>
				</section>

				{/* Orders State Section */}
				<section className='orders-state mb-5'>
					<div className='container'>
						<OrderState />
					</div>
				</section>

				{/* Uses State Section */}
				<section className='uses-state mb-5'>
					<div className='container'>
						<UsesStates />
					</div>
				</section>

				{/* Tables  Section */}
				<section className='tables mb-2'>
					<div className='container'>
						<Tables />
					</div>
				</section>
			</div>
		</Fragment>
	);
};

export default Dashboard;
