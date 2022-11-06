import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import arrowBack from '../assets/Icons/icon-30-arrwos back.svg';
import filter from '../assets/Icons/icon-24-filter.svg';
import gift from '../assets/Icons/icon-26-gift.svg';
import Clinic from '../assets/Icons/iocn-26-Clinic.svg';
import electornic from '../assets/Icons/icon-26-electornic.svg';
import deleteimage from '../assets/Icons/icon-24-delete.svg';
import { TbArrowsUpDown } from 'react-icons/tb';
import { IoIosArrowForward, IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';

const RegisterState = () => {
	return (
		<div className='register-wrapper'>
			<div className='row'>
				<div className='col-12 mb-4'>
					<div className='head d-flex '>
						<nav aria-label='breadcrumb'>
							<ol className='breadcrumb'>
								<li className='breadcrumb-item'>
									<NavLink to='/'>
										<img src={arrowBack} alt='' />
										<span className='ms-3 me-3'>الرئيسية</span>
									</NavLink>
								</li>
								<li className='breadcrumb-item active' aria-current='page'>
									حالة السجيل
								</li>
							</ol>
						</nav>

						<div className='btn-filter-bx'>
							<button className='btn-filter'>
								<img src={filter} alt='' />
								فلتر
							</button>
						</div>
					</div>
				</div>
				<div className='col-12 mb-5'>
					<div className='btn-box'>
						<button className='btn-agree'>التسجيل مع موافقة الإدارة</button>

						<button className='btn-agree'>إيقاف التسجيل</button>

						<button className='btn-agree'> التسجيل تلقائي</button>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='clo-12'>
					<div className='mb-2'>
						<div className='form-check '>
							<label className='form-check-label' htmlFor='flexCheckDefault'>
								تحديد الكل
							</label>
							<input className='form-check-input check-all' type='checkbox' value='' id='flexCheckDefault' />
						</div>
					</div>
					<table className='table table-wrapper mb-5'>
						<thead>
							<tr>
								<th scope='col'>اسم المتجر</th>
								<th scope='col'>
									اسم النشاط
									<TbArrowsUpDown />
								</th>
								<th scope='col'>
									الحالة
									<TbArrowsUpDown />
								</th>
								<th scope='col' className='text-start'>
									{' '}
									الإجراء
								</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<div className='form-check'>
											<label className='form-check-label' htmlFor='flexCheckDefault'>
												أمازون
											</label>
											<input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
										</div>
									</div>
								</td>
								<td>
									<div className='category  d-flex align-items-center justify-content-start'>
										<img src={gift} alt='' />
										<h6 className='h6 me-3 align-self-end'>هدايا وألعاب</h6>
									</div>
								</td>
								<td>
									<div className='state'>
										<p className='active'>نشط</p>
									</div>
								</td>
								<td>
									<div className='d-flex align-items-center justify-content-end ps-3'>
										<div className='form-check form-switch'>
											<input className='form-check-input' type='checkbox' id='flexSwitchCheckChecked' defaultChecked />
										</div>
										<img className='curs-pointer' src={deleteimage} alt='' />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<div className='form-check'>
											<label className='form-check-label' htmlFor='flexCheckDefault'>
												صحتي
											</label>
											<input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
										</div>
									</div>
								</td>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<img src={Clinic} alt='' />
										<h6 className='h6 me-3 align-self-end'> مستلزمات طبية </h6>
									</div>
								</td>
								<td>
									<div className='state'>
										<p> غير نشط</p>
									</div>
								</td>
								<td>
									<div className=' d-flex align-items-center justify-content-end ps-3'>
										<div className='form-check form-switch'>
											<input className='form-check-input' type='checkbox' id='flexSwitchCheckChecked' />
										</div>
										<img className='curs-pointer' src={deleteimage} alt='' />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<div className='form-check'>
											<label className='form-check-label' htmlFor='flexCheckDefault'>
												تسعة
											</label>
											<input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
										</div>
									</div>
								</td>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<img src={electornic} alt='' />
										<h6 className='h6 me-3 align-self-end'> الكترونيات</h6>
									</div>
								</td>
								<td>
									<div className='state'>
										<p> غير نشط</p>
									</div>
								</td>
								<td>
									<div className='d-flex align-items-center justify-content-end ps-3'>
										<div className='form-check form-switch'>
											<input className='form-check-input' type='checkbox' id='flexSwitchCheckChecked' />
										</div>
										<img className='curs-pointer' src={deleteimage} alt='' />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<div className='form-check'>
											<label className='form-check-label' htmlFor='flexCheckDefault'>
												أمازون
											</label>
											<input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
										</div>
									</div>
								</td>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<img src={gift} alt='' />
										<h6 className='h6 me-3 align-self-end'>هدايا وألعاب</h6>
									</div>
								</td>
								<td>
									<div className='state'>
										<p className='active'>نشط</p>
									</div>
								</td>
								<td>
									<div className='d-flex align-items-center justify-content-end ps-3'>
										<div className='form-check form-switch'>
											<input className='form-check-input' type='checkbox' id='flexSwitchCheckChecked' defaultChecked />
										</div>
										<img className='curs-pointer' src={deleteimage} alt='' />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<div className='form-check'>
											<label className='form-check-label' htmlFor='flexCheckDefault'>
												أمازون
											</label>
											<input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
										</div>
									</div>
								</td>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<img src={gift} alt='' />
										<h6 className='h6 me-3 align-self-end'> هدايا وألعاب </h6>
									</div>
								</td>
								<td>
									<div className=' state'>
										<p className='active'>نشط</p>
									</div>
								</td>
								<td>
									<div className='d-flex align-items-center justify-content-end ps-3'>
										<div className='form-check form-switch'>
											<input className='form-check-input' type='checkbox' id='flexSwitchCheckChecked' defaultChecked />
										</div>
										<img className='curs-pointer' src={deleteimage} alt='' />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<div className='form-check'>
											<label className='form-check-label' htmlFor='flexCheckDefault'>
												صحتي
											</label>
											<input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
										</div>
									</div>
								</td>
								<td>
									<div className='category  d-flex align-items-center justify-content-start'>
										<img src={Clinic} alt='' />
										<h6 className='h6 me-3 align-self-end'> مستلزمات طبية</h6>
									</div>
								</td>
								<td>
									<div className='state'>
										<p>غير نشط</p>
									</div>
								</td>
								<td>
									<div className='d-flex align-items-center justify-content-end ps-3'>
										<div className='form-check form-switch'>
											<input className='form-check-input' type='checkbox' id='flexSwitchCheckChecked' />
										</div>
										<img className='curs-pointer' src={deleteimage} alt='' />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<div className='form-check'>
											<label className='form-check-label' htmlFor='flexCheckDefault'>
												تسعة
											</label>
											<input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
										</div>
									</div>
								</td>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<img src={electornic} alt='' />
										<h6 className='h6 me-3 align-self-end'> الكترونيات </h6>
									</div>
								</td>
								<td>
									<div className='state'>
										<p> غير نشط</p>
									</div>
								</td>
								<td>
									<div className=' d-flex align-items-center justify-content-end ps-3'>
										<div className='form-check form-switch'>
											<input className='form-check-input' type='checkbox' id='flexSwitchCheckChecked' />
										</div>
										<img className='curs-pointer' src={deleteimage} alt='' />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<div className='form-check'>
											<label className='form-check-label' htmlFor='flexCheckDefault'>
												أمازون
											</label>
											<input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
										</div>
									</div>
								</td>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<img src={gift} alt='' />
										<h6 className='h6 me-3 align-self-end'> هدايا وألعاب</h6>
									</div>
								</td>
								<td>
									<div className=' state'>
										<p className='active'>نشط</p>
									</div>
								</td>
								<td>
									<div className=' d-flex align-items-center justify-content-end ps-3'>
										<div className='form-check form-switch'>
											<input className='form-check-input' type='checkbox' id='flexSwitchCheckChecked' defaultChecked />
										</div>
										<img className='curs-pointer' src={deleteimage} alt='' />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<div className='form-check'>
											<label className='form-check-label' htmlFor='flexCheckDefault'>
												أمازون
											</label>
											<input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
										</div>
									</div>
								</td>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<img src={gift} alt='' />
										<h6 className='h6 me-3 align-self-end'> هدايا وألعاب</h6>
									</div>
								</td>
								<td>
									<div className=' state'>
										<p className='active'>نشط</p>
									</div>
								</td>
								<td>
									<div className='  d-flex align-items-center justify-content-end ps-3'>
										<div className='form-check form-switch'>
											<input className='form-check-input' type='checkbox' id='flexSwitchCheckChecked' defaultChecked />
										</div>
										<img className='curs-pointer' src={deleteimage} alt='' />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<div className='form-check'>
											<label className='form-check-label' htmlFor='flexCheckDefault'>
												أمازون
											</label>
											<input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
										</div>
									</div>
								</td>
								<td>
									<div className='category d-flex align-items-center justify-content-start'>
										<img src={gift} alt='' />
										<h6 className='h6 me-3 align-self-end'> هدايا وألعاب </h6>
									</div>
								</td>
								<td>
									<div className=' state'>
										<p className='active'>نشط</p>
									</div>
								</td>
								<td>
									<div className='  d-flex align-items-center justify-content-end ps-3'>
										<div className='form-check form-switch'>
											<input className='form-check-input' type='checkbox' id='flexSwitchCheckChecked' defaultChecked />
										</div>
										<img src={deleteimage} alt='' />
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<div className='row'>
						<div className='col-12'>
							<div className='box d-flex align-items-center justify-content-end'>
								<div className='pagination-wrapper'>
									<nav aria-label='...' className='pang-nav'>
										<ul className='pagination'>
											<li className='page-item '>
												<Link className='page-link arrow-forward' href='#' tabIndex='-1' aria-disabled='true'>
													<IoIosArrowForward />
												</Link>
											</li>
											<li className='page-item'>
												<Link className='page-link' to='#'>
													...
												</Link>
											</li>
											<li className='page-item '>
												<Link className='page-link' to='#'>
													3
												</Link>
											</li>
											<li className='page-item '>
												<Link className='page-link' to='#'>
													2
												</Link>
											</li>
											<li className='page-item active'>
												<Link className='page-link' to='#' aria-current='page'>
													1
												</Link>
											</li>
											<li className='page-item disabled'>
												<Link className='page-link arrow-back' to='#'>
													<IoIosArrowBack />
												</Link>
											</li>
										</ul>
									</nav>
								</div>

								<span className='arrow'>
									<IoIosArrowDown />
								</span>
								<select className='form-select btn btn-outline' aria-label='Default select example'>
									<option defaultChecked>عدد الصفوف</option>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>4</option>
									<option value='3'>5</option>
									<option value='3'>6</option>
									<option value='3'>7</option>
									<option value='3'>8</option>
									<option value='3'>9</option>
									<option value='3'>10</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterState;
