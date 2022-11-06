import React from 'react';
import { NavBar } from '../components/index';

import userImage from '../assets/Icons/Image Person.png';
import email from '../assets/Icons/icon-24- email.svg';
import phone from '../assets/Icons/icon-24- call.svg';
import uploadIcon from '../assets/Icons/icon-24-upload_outlined.png';
const AcountEdit = () => {
	return (
		<div className='account-edit-wrapper'>
			{/* Edit User Data */}
			<div className='row overflow-hidden'>
				<div className='col-2'></div>
				<div className='col-10 p-0 '>
					<div className='user-edit-section'>
						<div className='row'>
							<div className='title'>
								<h4 className='h4'> تعديل بيانات حسابي</h4>
								<p>
									جدول المستخدمين / <span>تعديل بيانات المستخدم</span>
								</p>
							</div>
						</div>

						<div className='row'>
							<div className='info-wrapper'>
								<div className='info d-flex justify-content-start mb-5'>
									{/*  User image */}
									<div className='user-img'>
										<img src={userImage} alt='' />
									</div>
									{/*  User info */}
									<div className='user-info me-5'>
										<div className='name mb-2'>
											<h5>خالد عبد الرحمن محمد</h5>
										</div>
										<div className='email d-flex mb-2'>
											<img src={email} alt='' />
											<p className='me-3 mb-0'>Ka20@hotmail.com </p>
										</div>
										<div className='phone d-flex '>
											<img src={phone} alt='' />
											<p className='me-3 mb-0'>9968461081</p>
										</div>
									</div>

									{/*  User type */}
									<div className='user-type '>
										<p>آدمن</p>
									</div>
								</div>

								<div className='edit-user-info'>
									<form className='row'>
										<div className='row'>
											<div className='col-md-6'>
												<label className='opacity mb-2'>ddddddd</label>
												<select className='form-select'>
													<option defaultValue>اختر نوع الدور الوظيفي</option>
													<option value='1'>One</option>
													<option value='2'>Two</option>
													<option value='3'>Three</option>
												</select>
											</div>
											<div className='col-md-6'>
												<label hmtlfor='password' className='form-label'>
													كلمة المرور
												</label>
												<input type='password' className='form-control' id='password' placeholder='00000000' />
												<p>أدخل أرقام وحروف ورموز</p>
											</div>
										</div>
										<div className='row ustom-mb'>
											<div className='col-6'>
												<label hmtlfor='username' className='form-label'>
													اسم المستخدم
												</label>
												<input type='text' className='form-control' id='username' placeholder='ادخل حروف فقط' />
											</div>
											<div className='col-6'>
												<label hmtlfor='password2' className='form-label'>
													تأكيد كلمة المرور
												</label>
												<input type='password' className='form-control' id='password2' placeholder='00000000' />
												<p>أدخل أرقام وحروف ورموز</p>
											</div>
										</div>

										<div className='row mb-4'>
											<div className='col-6'>
												<label hmtlfor='email' className='form-label'>
													البريد الالكتروني
												</label>
												<input type='email' className='form-control' id='email' placeholder='sample@sa.com' />
											</div>
										</div>

										<div className='row'>
											<div className='col-6'>
												<label hmtlfor='uploadFile' className='form-label '>
													الصورة الشخصية
												</label>
												<label hmtlfor='uploadFile' className='input-file-label '>
													<img src={uploadIcon} alt='' />
												</label>
												<input type='file' className='form-control file-input' id='uploadFile' placeholder=' ' />
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>

						<div className='row text-center'>
							<div className='col-12'>
								<div className='btn-wrapper'>
									<button type='submit' className='btn-save'>
										حفظ وإغلاق
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AcountEdit;
