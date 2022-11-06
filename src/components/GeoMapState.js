import React from 'react';
import { BiCircle } from 'react-icons/bi';
const GeoMapState = () => {
	return (
		<div className='row'>
			<div className='row'>
				<div className=' row ste-bx mb-2 '>
					<div className='col-6 city'>
						<BiCircle className=' mov circle'></BiCircle>
						<span className='city-style me-3'>الرياض</span>
					</div>
					<div className='col-6  price'>
						<span className='d-flex justify-content-end price-style'>$29,193</span>
					</div>
				</div>
				<div className=' row ste-bx mb-2 '>
					<div className='col-6 city'>
						<BiCircle className='gada-clr circle'></BiCircle>
						<span className='city-style me-3'>جدة</span>
					</div>
					<div className='col-6  price'>
						<span className='d-flex justify-content-end price-style'>$18,832</span>
					</div>
				</div>
				<div className=' row ste-bx mb-2 '>
					<div className='col-6 city'>
						<BiCircle className='wrong circle'></BiCircle>
						<span className='city-style me-3'>الدمام</span>
					</div>
					<div className='col-6  price'>
						<span className='d-flex justify-content-end price-style'>$19,758</span>
					</div>
				</div>
				<div className=' row ste-bx mb-2 '>
					<div className='col-6 city'>
						<BiCircle className=' pinkey circle'></BiCircle>
						<span className='city-style me-3'>الأحساء</span>
					</div>
					<div className='col-6  price'>
						<span className='d-flex justify-content-end price-style'>$23,078</span>
					</div>
				</div>
				<div className=' row ste-bx mb-2 '>
					<div className='col-6 city'>
						<BiCircle className='ngran-clr circle'></BiCircle>
						<span className='city-style me-3'>نجران</span>
					</div>
					<div className='col-6  price'>
						<span className='d-flex justify-content-end price-style'>$29,193 </span>
					</div>
				</div>
				<div className=' row ste-bx mb-2 '>
					<div className='col-6 city'>
						<BiCircle className='orange circle'></BiCircle>
						<span className='city-style me-3'>المدينة المنورة</span>
					</div>
					<div className='col-6  price'>
						<span className='d-flex justify-content-end price-style'> 760,37$</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GeoMapState;
