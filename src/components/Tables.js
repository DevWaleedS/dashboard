import React from 'react';
import gift from '../assets/Icons/icon-26-gift.svg';
import Clinic from '../assets/Icons/iocn-26-Clinic.svg';
import electornic from '../assets/Icons/icon-26-electornic.svg';
import camera from '../assets/Icons/image camera.png';
import car from '../assets/Icons/image car.png';
import shose from '../assets/Icons/image shose.png';

import { BsFillStarFill, BsStarHalf } from 'react-icons/bs';

const Tables = () => {
	return (
		<div className='row'>
			<div className='col-6'>
				<div className='table-wrapper'>
					<div className='title'>
						<h4 className='h4'>المنتجات الأكثر زيارة</h4>
					</div>
					<table className='table '>
						<thead>
							<tr>
								<th scope='col' style={{ width: '25%' }}>
									رقم المنتج
								</th>
								<th scope='col' style={{ width: '30%' }}>
									الاسم
								</th>
								<th scope='col'>التصنيف</th>
								<th scope='col'>السعر</th>
								<th scope='col' className='text-center' style={{ width: '10%' }}>
									اجمالي المبيعات
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div className='prod-num d-flex align-items-center justify-content-start'>
										<img src={shose} alt='' />
										<h6 className='align-self-end me-3 '>054</h6>
									</div>
								</td>
								<td>حذاء نايك</td>
								<td className='text-center'>أحذية</td>
								<td className='text-center'>35</td>
								<td className='text-center'>9830</td>
							</tr>
							<tr>
								<td>
									<div className='prod-num d-flex align-items-center justify-content-start'>
										<img src={camera} alt='' />
										<h6 className='align-self-end me-3'>158</h6>
									</div>
								</td>
								<td>كاميرا شت</td>
								<td className='text-center'>الكترونيات</td>
								<td className='text-center'>35</td>
								<td className='text-center'>9830</td>
							</tr>
							<tr>
								<td>
									<div className='prod-num d-flex align-items-center justify-content-start'>
										<img src={car} alt='' />
										<h6 className='align-self-end me-3'>98</h6>
									</div>
								</td>
								<td>سيارة انتيكا</td>
								<td className='text-center'>هدايا</td>
								<td className='text-center'>35</td>
								<td className='text-center'>9830</td>
							</tr>
							<tr>
								<td>
									<div className='prod-num d-flex align-items-center justify-content-start'>
										<img src={camera} alt='' />
										<h6 className='align-self-end me-3'>054</h6>
									</div>
								</td>
								<td style={{ width: '30%' }}>نظارة شمسية</td>
								<td className='text-center'>اكسسوارات</td>
								<td className='text-center'>35</td>
								<td className='text-center'>9830</td>
							</tr>
							<tr>
								<td>
									<div className='prod-num d-flex align-items-center justify-content-start'>
										<img src={shose} alt='' />
										<h6 className='align-self-end me-3'>077</h6>
									</div>
								</td>
								<td>حذاء نايك</td>
								<td className='text-center'>حذية</td>
								<td className='text-center'>35</td>
								<td className='text-center'>9830</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className='col-6'>
				<div className='table-wrapper products'>
					<div className='title'>
						<h4 className='h4'>المتاجر الأكثر زيارة</h4>
					</div>
					<table className='table '>
						<thead>
							<tr>
								<th scope='col'>اسم المتجر</th>
								<th scope='col'>التصنيف</th>
								<th scope='col'>تقييم العملاء</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>أمازون</td>
								<td>
									<div className='category  d-flex align-items-center justify-content-start'>
										<img src={gift} alt='' />
										<h6 className='h6 me-3 align-self-end'>هدايا وألعاب</h6>
									</div>
								</td>
								<td>
									<div className='rates  d-flex align-items-center justify-content-evenly'>
										<p>4.8</p>
										<BsFillStarFill />
									</div>
								</td>
							</tr>
							<tr>
								<td>صحتي</td>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<img src={Clinic} alt='' />
										<h6 className='h6 me-3 align-self-end'> مستلزمات طبية </h6>
									</div>
								</td>
								<td>
									<div className='rates  d-flex align-items-center justify-content-evenly'>
										<p>2.5</p>
										<BsStarHalf />
									</div>
								</td>
							</tr>
							<tr>
								<td>تسعة</td>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<img src={electornic} alt='' />
										<h6 className='h6 me-3 align-self-end'> الكترونيات</h6>
									</div>
								</td>
								<td>
									<div className='rates  d-flex align-items-center justify-content-evenly'>
										<p>2.5</p>
										<BsStarHalf />
									</div>
								</td>
							</tr>
							<tr>
								<td>أمازون</td>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<img src={gift} alt='' />
										<h6 className='h6 me-3 align-self-end'>هدايا وألعاب</h6>
									</div>
								</td>
								<td>
									<div className='rates  d-flex align-items-center justify-content-evenly'>
										<p>4.8</p>
										<BsFillStarFill />
									</div>
								</td>
							</tr>
							<tr>
								<td>صحتي</td>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<img src={Clinic} alt='' />
										<h6 className='h6 me-3 align-self-end'> مستلزمات طبية </h6>
									</div>
								</td>
								<td>
									<div className='rates  d-flex align-items-center justify-content-evenly'>
										<p>2.5</p>
										<BsStarHalf />
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Tables;
