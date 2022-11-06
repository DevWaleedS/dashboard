import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import homeIcon from '../assets/Icons/icon_24_home.svg';
import avatar from '../assets/Icons/Image Person.png';
import notifications from '../assets/Icons/list notifications.svg';
import email from '../assets/Icons/icon-24- email.svg';
import search from '../assets/Icons/icon_24_search.svg';

import { IoIosArrowDown } from 'react-icons/io';

const NavBar = () => {
	return (
		<Fragment>
			{/* Nav bar component */}
			<nav className='nav nav-bg d-flex align-items-center'>
				<div className='container-fluid'>
					<div className='row d-flex align-items-center'>
						<div className='col-2 d-flex align-self-center'>
							<NavLink className='home-link h5' to='#'>
								<img src={homeIcon} alt='' />
								<span>الموقع</span>
							</NavLink>
						</div>
						<div className='col-2 d-flex align-self-end'>
							<div className='avatar d-flex align-items-center '>
								<div className=' avatar-box'>
									<img className='avatar-img ' src={avatar} alt='' />
								</div>
								<div className='avatar-name d-flex align-self-end'>
									<IoIosArrowDown />
									<span className='h6'>محمد عبد الرحمن</span>
								</div>
							</div>
						</div>
						<div className='col-2 d-flex align-self-end'>
							<div className='row d-flex justify-content-around'>
								<div className='col-2'>
									<div className='notification '>
										<img src={notifications} alt='' title='notification' />
									</div>
								</div>
								<div className='col-2'>
									<div className='email'>
										<img src={email} alt='' title='messages' />
									</div>
								</div>
							</div>
						</div>

						<div className='col-6'>
							<div className='search-wrapper'>
								<img src={search} alt='' />
								<input className='search-input' type='text' name='search' id='search' placeholder='هنا ستجد ما تبحث عنه' />
							</div>
						</div>
					</div>
				</div>
			</nav>
		</Fragment>
	);
};

export default NavBar;
