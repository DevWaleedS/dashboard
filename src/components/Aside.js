import React, { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';
import dashboard from '../assets/Icons/icon-24-dashboard.svg';
import graduatioin from '../assets/Icons/icon-24-graduatioin.svg';
import market from '../assets/Icons/icon-24-market.svg';
import marketing from '../assets/Icons/icon-24-marketing.svg';
import salesman from '../assets/Icons/icon-24-sales man.svg';
import price from '../assets/Icons/icon-24-price.svg';
import pages from '../assets/Icons/icon-24-pages.svg';
import order from '../assets/Icons/icon-24-order.svg';
import services from '../assets/Icons/icon-24-dashboard.svg';
import Category from '../assets/Icons/icon-24-Category.svg';
import wallet from '../assets/Icons/icon-24-wallet.svg';
import template from '../assets/Icons/icon-24-template.svg';
import support from '../assets/Icons/icon-24-support.svg';
import setting from '../assets/Icons/icon-24-setting.svg';

import { IoIosArrowBack } from 'react-icons/io';
import { BsPerson } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { MdStore } from 'react-icons/md';
import { BsFillCircleFill } from 'react-icons/bs';

const Aside = () => {
	const [open, setOpen] = useState(false);


	// set open men func
	const openSubMenuHandler = () => {
		setOpen(!open);
	};

	
	return (
		<div className='menu-links'>
			<ul className='menu-'>
				<li>
					<Link className='item' to='/dashboard/'>
						<img src={dashboard} alt='' />
						<h4>الرئيسية</h4>
					</Link>
				</li>
				<li>
					<div className='item'>
						<img src={market} alt='' />
						<h4>السوق</h4>
						<div className='arrow-icon'>
							<IoIosArrowBack />
						</div>
					</div>
					{/*sub menu */}
					<div className='sub-menu '>
						<NavLink className='item' to='/dashboard/template'>
							<BsFillCircleFill />
							<h4> نص</h4>
						</NavLink>
						<NavLink className='item' to='/dashboard/template'>
							<BsFillCircleFill />
							<h4>نص</h4>
						</NavLink>
					</div>
				</li>
				<li>
					<div className={!open ? 'item ' : 'item active'} onClick={openSubMenuHandler}>
						<MdStore />
						<h4>المتاجر</h4>
						<div className='arrow-icon'>
							<IoIosArrowBack />
						</div>
					</div>
					{/*sub menu */}
					<div className={!open ? 'sub-menu ' : 'sub-menu active-submenu'}>
						<NavLink className='item ' to='/template'>
							<BsFillCircleFill />
							<h4> نشاط المتاجر</h4>
						</NavLink>
						<NavLink className='item' to='/template'>
							<BsFillCircleFill />
							<h4>المتاجر</h4>
						</NavLink>
						<NavLink className='item ' to='/dashboard/RegisterState'>
							<BsFillCircleFill />
							<h4>حالة التسجيل</h4>
						</NavLink>
					</div>
				</li>
				<li>
					<div className='item '>
						<img src={price} alt='' />
						<h4>الباقات</h4>
						<div className='arrow-icon'>
							<IoIosArrowBack />
						</div>
					</div>
					{/*sub menu */}
					<div className='sub-menu '>
						<NavLink className='item' to='/template'>
							<BsFillCircleFill />
							<h4>عرض المناديب</h4>
						</NavLink>
						<NavLink className='item' to='/template'>
							<BsFillCircleFill />
							<h4>حالة التسجيل</h4>
						</NavLink>
					</div>
				</li>
				<li>
					<NavLink className='item' to='/services'>
						<img src={services} alt='' />
						<h4>الخدمات</h4>
					</NavLink>
				</li>
				<li>
					<NavLink className='item' to='/graduation'>
						<img src={graduatioin} alt='' />
						<h4>أكاديمية اطلبها</h4>
					</NavLink>
				</li>
				<li>
					<div className='item '>
						<img src={template} alt='' />
						<h4>القالب</h4>
						<div className='arrow-icon'>
							<IoIosArrowBack />
						</div>
					</div>

					{/*sub menu */}
					<div className='sub-menu'>
						<NavLink className='item' to='/template'>
							<BsFillCircleFill />
							<h4> نص</h4>
						</NavLink>
						<NavLink className='item' to='/template'>
							<BsFillCircleFill />
							<h4> نص</h4>
						</NavLink>
					</div>
				</li>
				<li>
					<NavLink className='item' to='/pages'>
						<img src={pages} alt='' />
						<h4>الصفحات</h4>
					</NavLink>
				</li>
				<li>
					<NavLink className='item' to='dashboard/AcountEdit'>
						<BsPerson />
						<h4>المستخدمين</h4>
					</NavLink>
				</li>
				<li>
					<div className='item'>
						<img src={marketing} alt='' />
						<h4>التسويق</h4>
						<div className='arrow-icon'>
							<IoIosArrowBack />
						</div>
					</div>
					{/*sub menu */}
					<div className='sub-menu'>
						<NavLink className='item' to='/template'>
							<BsFillCircleFill />
							<h4> نص</h4>
						</NavLink>
						<NavLink className='item' to='/template'>
							<BsFillCircleFill />
							<h4> نص</h4>
						</NavLink>
					</div>
				</li>
				<li>
					<div className='item'>
						<img src={salesman} alt='' />
						<h4>المندوبين</h4>
						<div className='arrow-icon'>
							<IoIosArrowBack />
						</div>
					</div>
					{/*sub menu */}
					<div className='sub-menu'>
						<NavLink className='item' to='/template'>
							<BsFillCircleFill />
							<h4> عرض المناديب</h4>
						</NavLink>
						<NavLink className='item' to='/template'>
							<BsFillCircleFill />
							<h4>حالة التسجيل</h4>
						</NavLink>
					</div>
				</li>
				<li>
					<div className='item'>
						<img src={Category} alt='' />
						<h4>التصنيفات</h4>

						<div className='arrow-icon'>
							<IoIosArrowBack />
						</div>
					</div>
					{/*sub menu */}
					<div className='sub-menu'>
						<NavLink className='item' to='/template'>
							<BsFillCircleFill />
							<h4> نص</h4>
						</NavLink>
						<NavLink className='item' to='/template'>
							<BsFillCircleFill />
							<h4> نص</h4>
						</NavLink>
					</div>
				</li>
				<li>
					<NavLink className='item' to='/orders'>
						<img src={order} alt='' />
						<h4>الطلبات</h4>
					</NavLink>
				</li>
				<li>
					<NavLink className='item' to='/wallet'>
						<img src={wallet} alt='' />
						<h4>المحفظة</h4>
					</NavLink>
				</li>
				<li>
					<NavLink className='item' to='/support'>
						<img src={support} alt='' />
						<h4>الدعم الفني</h4>
					</NavLink>
				</li>
				<li>
					<div className='item'>
						<img src={setting} alt='' />
						<h4>الإعدادات</h4>
						<div className='arrow-icon'>
							<IoIosArrowBack />
						</div>
					</div>
					{/*sub menu */}
					<div className='sub-menu '>
						<NavLink className='item' to='/template'>
							<BsFillCircleFill />
							<h4> نص</h4>
						</NavLink>
						<NavLink className='item' to='/template'>
							<BsFillCircleFill />
							<h4> نص</h4>
						</NavLink>
					</div>
				</li>

				<li className='logout'>
					<NavLink className='item' to='/logout'>
						<FiLogOut />
						<h4>تسجيل خروج</h4>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Aside;
